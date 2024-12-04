import dietaryAdvisor from '../services/dietaryAdvisor.js';

// Initialize listeners
self.oninstall = (event) => {
  console.log('Service Worker installing...');
};

self.onactivate = (event) => {
  console.log('Service Worker activating...');
};

class StatusManager {
  constructor() {
    this.currentStatus = null;
    this.steps = [
      { step: 'init', message: 'Initializing analysis...' },
      { step: 'extracting', message: 'Extracting product information...' },
      { step: 'nutrition', message: 'Processing nutrition facts...' },
      { step: 'ingredients', message: 'Analyzing ingredients...' },
      { step: 'health', message: 'Evaluating health factors...' },
      { step: 'alternatives', message: 'Finding nutritional alternatives...' },
      { step: 'allergens', message: 'Checking allergens and intolerances...' },
      { step: 'safety', message: 'Evaluating product safety...' },
      { step: 'effects', message: 'Analyzing health effects...' },
      { step: 'claims', message: 'Verifying product claims...' },
      { step: 'calculating', message: 'Calculating overall scores...' },
      { step: 'recommendations', message: 'Generating recommendations...' }
    ];
    this.stepIndex = 0;
    this.loadStatus();
  }

  async loadStatus() {
    try {
      const { analysisStatus } = await chrome.storage.local.get('analysisStatus');
      if (analysisStatus) {
        this.currentStatus = analysisStatus;
        this.stepIndex = analysisStatus.stepIndex || 0;
      }
    } catch (error) {
      console.error('Error loading status:', error);
    }
  }

  async updateStatus(status, details = null) {
    this.currentStatus = {
      step: this.steps[this.stepIndex]?.step || 'unknown',
      message: this.steps[this.stepIndex]?.message || 'Processing...',
      details: details,
      timestamp: new Date().toISOString(),
      stepIndex: this.stepIndex,
      totalSteps: this.steps.length
    };

    try {
      await chrome.storage.local.set({ 'analysisStatus': this.currentStatus });
      await this.broadcastStatus();
      this.stepIndex = (this.stepIndex + 1) % this.steps.length;
    } catch (error) {
      console.error('Error updating status:', error);
    }
  }

  async broadcastStatus() {
    if (this.currentStatus) {
      try {
        await chrome.runtime.sendMessage({
          type: 'ANALYSIS_STATUS',
          status: this.currentStatus
        });
      } catch (error) {
        console.log('No listeners for status update');
      }
    }
  }

  async reset() {
    this.stepIndex = 0;
    this.currentStatus = null;
    try {
      await chrome.storage.local.remove('analysisStatus');
      await this.broadcastStatus();
    } catch (error) {
      console.error('Error resetting status:', error);
    }
  }
}

class ProductAnalysisService {
  constructor() {
    this.initialized = false;
    this.summarizer = null;
    this.analysisInProgress = false;
    this.statusManager = new StatusManager();
    this.currentProductUrl = null;
    this.nutritionixConfig = {
      appId: 'faee4d9c',
      apiKey: '2b057e15ced740df73d36166de052ef8'
    };
  }

  async initialize() {
    try {
      if (this.initialized) return true;

      console.log("Initializing product analysis service...");
      const capabilities = await ai.languageModel.capabilities();

      if (capabilities.available === 'no') {
        throw new Error('Language model not available');
      }

      // Initialize with enhanced prompt for better health analysis
      this.session = await ai.languageModel.create({
        systemPrompt: `You are a nutrition and dietary expert analyzing food products and their nutritional labels. Your task is to:
1. Evaluate nutrition facts and provide clear insights
2. Identify potential allergens, intolerances, and health concerns
3. Provide detailed health implications and effects
4. Consider dietary restrictions and preferences
5. Suggest alternative foods with similar nutritional profiles
6. Provide preparation tips for healthier consumption

Always respond in exactly this format:
NUTRITION SCORE: [0-100]
KEY NUTRIENTS: [List important nutrients]
HEALTH INSIGHTS: [Key health considerations]
ALLERGEN ALERT: [List potential allergens]
HEALTH EFFECTS: [Short and long-term health effects]
INGREDIENTS NOTES: [Notable ingredient information]
DIETARY INFO: [Vegan/Vegetarian/Gluten-free status]
ALTERNATIVES: [List of alternative foods with similar nutrition]
LABEL CLAIMS: [Evaluate any health claims]
RECOMMENDATIONS: [Suggestions for healthier choices]`,
        temperature: 0.3,
        topK: 1
      });

      // Initialize dietary advisor
      await dietaryAdvisor.initialize();

      this.initialized = true;
      return true;
    } catch (error) {
      console.error("Failed to initialize:", error);
      throw error;
    }
  }

  async getNutritionixData(query) {
    try {
      console.log('Calling Nutritionix API for:', query);

      const searchUrl = `https://trackapi.nutritionix.com/v2/search/instant?query=${encodeURIComponent(query)}`;
      const searchResponse = await fetch(searchUrl, {
        method: 'GET',
        headers: {
          'x-app-id': this.nutritionixConfig.appId,
          'x-app-key': this.nutritionixConfig.apiKey,
          'Content-Type': 'application/json'
        }
      });

      if (!searchResponse.ok) {
        throw new Error(`Nutritionix search failed: ${searchResponse.status}`);
      }

      const searchData = await searchResponse.json();
      const bestMatch = searchData.branded?.[0] || searchData.common?.[0];

      if (!bestMatch) {
        console.log('No matches found');
        return null;
      }

      const nutrientsResponse = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
        method: 'POST',
        headers: {
          'x-app-id': this.nutritionixConfig.appId,
          'x-app-key': this.nutritionixConfig.apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: bestMatch.food_name
        })
      });

      if (!nutrientsResponse.ok) {
        throw new Error(`Nutritionix nutrients failed: ${nutrientsResponse.status}`);
      }

      const nutrientsData = await nutrientsResponse.json();

      return {
        item: {
          name: bestMatch.food_name,
          brand: bestMatch.brand_name || 'Generic',
          serving: {
            quantity: bestMatch.serving_qty,
            unit: bestMatch.serving_unit
          },
          photo: bestMatch.photo?.thumb
        },
        search_query: query,
        nutrition: nutrientsData.foods?.[0] || null
      };

    } catch (error) {
      console.error('Nutritionix API error:', error);
      throw error;
    }
  }

 async analyzeProduct(productData) {
    if (this.analysisInProgress) {
      throw new Error('Analysis already in progress');
    }

    this.currentProductUrl = productData.url;

    try {
      this.analysisInProgress = true;
      this.statusManager.updateStatus('init');

      if (!this.initialized) {
        await this.initialize();
      }

      // Get user preferences and nutrition data
      const [{ userPreferences }, nutritionixData] = await Promise.all([
        chrome.storage.local.get('userPreferences'),
        this.getNutritionixData(productData.title)
      ]);

      this.statusManager.updateStatus('nutrition');

      // Format nutrition data
      const nutrition = nutritionixData?.nutrition;
      const formattedNutrition = {
        calories: nutrition?.nf_calories,
        protein: nutrition?.nf_protein,
        carbs: nutrition?.nf_total_carbohydrate,
        fat: nutrition?.nf_total_fat,
        fiber: nutrition?.nf_dietary_fiber,
        sodium: nutrition?.nf_sodium,
        sugars: nutrition?.nf_sugars,
        cholesterol: nutrition?.nf_cholesterol,
        potassium: nutrition?.nf_potassium,
        saturatedFat: nutrition?.nf_saturated_fat
      };

      // Get dietary advice
      this.statusManager.updateStatus('health');
      const dietaryAdvice = await dietaryAdvisor.getAdvice(
        {
          title: productData.title,
          nutritionData: formattedNutrition
        },
        userPreferences
      );

      // Create enhanced analysis prompt
      const prompt = `Analyze this product's nutrition information:

Product: ${productData.title}
Brand: ${productData.brand || nutritionixData?.item?.brand}
Category: ${productData.category}

Nutrition Facts (per serving):
- Calories: ${formattedNutrition.calories?.toFixed(1) || 'N/A'} kcal
- Protein: ${formattedNutrition.protein?.toFixed(1) || 'N/A'}g
- Carbohydrates: ${formattedNutrition.carbs?.toFixed(1) || 'N/A'}g
- Total Fat: ${formattedNutrition.fat?.toFixed(1) || 'N/A'}g
- Saturated Fat: ${formattedNutrition.saturatedFat?.toFixed(1) || 'N/A'}g
- Fiber: ${formattedNutrition.fiber?.toFixed(1) || 'N/A'}g
- Sodium: ${formattedNutrition.sodium?.toFixed(1) || 'N/A'}mg
- Sugars: ${formattedNutrition.sugars?.toFixed(1) || 'N/A'}g
- Cholesterol: ${formattedNutrition.cholesterol?.toFixed(1) || 'N/A'}mg
- Potassium: ${formattedNutrition.potassium?.toFixed(1) || 'N/A'}mg

User Dietary Preferences: ${JSON.stringify(userPreferences || {})}
Health Concerns: ${JSON.stringify(dietaryAdvice.concerns || [])}

Provide a comprehensive analysis based on this data.`;

      this.statusManager.updateStatus('analyzing');
      const analysis = await this.session.prompt(prompt);

      this.statusManager.updateStatus('finalizing');
      const result = this.parseAnalysis(analysis);

      const finalAnalysis = {
        ...result,
        productInfo: {
          title: productData.title,
          brand: productData.brand || nutritionixData?.item?.brand,
          category: productData.category
        },
        nutritionData: formattedNutrition,
        nutritionixData,
        healthAdvisory: dietaryAdvice,
        timestamp: new Date().toISOString(),
        url: this.currentProductUrl
      };

      // Persist analysis state
      await this.persistAnalysisState({
        loading: false,
        status: null,
        analysis: finalAnalysis
      });

      await chrome.storage.local.set({
        'lastAnalysis': finalAnalysis,
        [`analysis_${this.currentProductUrl}`]: finalAnalysis
      });

      await this.broadcastResult(finalAnalysis);
      return finalAnalysis;

    } catch (error) {
      console.error("Analysis error:", error);
      await this.broadcastError(error);
      throw error;
    } finally {
      this.analysisInProgress = false;
      await this.statusManager.reset();
    }
  }

  async persistAnalysisState(state) {
    try {
      await chrome.storage.local.set({
        'analysisState': {
          ...state,
          timestamp: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('Failed to persist analysis state:', error);
    }
  }

  async getPersistedState() {
    try {
      const { analysisState } = await chrome.storage.local.get('analysisState');
      if (analysisState?.timestamp) {
        // Clear state if it's older than 5 minutes
        const ageInMinutes = (new Date() - new Date(analysisState.timestamp)) / 1000 / 60;
        if (ageInMinutes > 5) {
          await chrome.storage.local.remove('analysisState');
          return null;
        }
        return analysisState;
      }
      return null;
    } catch (error) {
      console.error('Failed to get persisted state:', error);
      return null;
    }
  }

  parseAnalysis(text) {
    try {
      const result = {
        score: 0,
        keyNutrients: [],
        healthInsights: [],
        allergens: [],
        ingredientNotes: [],
        dietaryInfo: {},
        labelClaims: [],
        recommendations: []
      };

      const sections = text.split('\n');
      sections.forEach(section => {
        const [header, ...content] = section.split(':');
        const value = content.join(':').trim();

        switch (header.trim()) {
          case 'NUTRITION SCORE':
            result.score = parseInt(value) || 0;
            break;
          case 'KEY NUTRIENTS':
            result.keyNutrients = value.split(',').map(n => n.trim());
            break;
          case 'HEALTH INSIGHTS':
            result.healthInsights = value.split(',').map(i => i.trim());
            break;
          case 'ALLERGEN ALERT':
            result.allergens = value.split(',').map(a => a.trim());
            break;
          case 'INGREDIENTS NOTES':
            result.ingredientNotes = value.split(',').map(n => n.trim());
            break;
          case 'DIETARY INFO':
            result.dietaryInfo = {
              isVegan: value.toLowerCase().includes('vegan'),
              isVegetarian: value.toLowerCase().includes('vegetarian'),
              isGlutenFree: value.toLowerCase().includes('gluten-free')
            };
            break;
          case 'LABEL CLAIMS':
            result.labelClaims = value.split(',').map(c => c.trim());
            break;
          case 'RECOMMENDATIONS':
            result.recommendations = value.split(',').map(r => r.trim());
            break;
        }
      });

      return result;
    } catch (error) {
      console.error('Error parsing analysis:', error);
      throw new Error('Failed to parse analysis results');
    }
  }

  async broadcastError(error) {
    try {
      await chrome.runtime.sendMessage({
        type: 'ANALYSIS_ERROR',
        error: error?.message || error?.toString() || 'Unknown error'
      });
    } catch (error) {
      console.error('Error broadcasting error:', error);
    }
  }

  async broadcastResult(analysis) {
  try {
    // Check if popup is open by sending a test message
    await chrome.runtime.sendMessage({ type: 'PING' });
    // If we get here, popup is open, send the real message
    await chrome.runtime.sendMessage({
      type: 'ANALYSIS_COMPLETE',
      data: analysis
    });
  } catch (error) {
    // Popup is closed, ignore the error
    console.log('Popup is closed, skipping broadcast');
  }
}

  async loadPreviousAnalysis(url) {
    try {
      const result = await chrome.storage.local.get(`analysis_${url}`);
      return result[`analysis_${url}`] || null;
    } catch (error) {
      console.error('Error loading previous analysis:', error);
      return null;
    }
  }

  async clearAnalysis(url = null) {
    try {
      if (url) {
        await chrome.storage.local.remove([`analysis_${url}`, 'lastAnalysis']);
      } else {
        const items = await chrome.storage.local.get(null);
        const keysToRemove = Object.keys(items).filter(key =>
          key.startsWith('analysis_') || key === 'lastAnalysis'
        );
        await chrome.storage.local.remove(keysToRemove);
      }
      await this.statusManager.reset();
    } catch (error) {
      console.error('Error clearing analysis:', error);
    }
  }

  destroy() {
    if (this.session) {
      this.session.destroy();
      this.session = null;
    }
    this.initialized = false;
    this.statusManager.reset();
  }
}

// Initialize service
const productAnalysisService = new ProductAnalysisService();
console.log('Product Analysis Service created');

// Handle messages
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Background script received message:", message);

  switch (message.type) {
    case 'GET_PERSISTED_STATE':
      (async () => {
        try {
          const state = await productAnalysisService.getPersistedState();
          sendResponse({ success: true, state });
        } catch (error) {
          sendResponse({ success: false, error: error.toString() });
        }
      })();
      return true;

    case 'ANALYZE_PRODUCT':
      (async () => {
        try {
          const analysis = await productAnalysisService.analyzeProduct(message.data);
          sendResponse({ success: true, data: analysis });
        } catch (error) {
          console.error("Analysis failed:", error);
          sendResponse({ success: false, error: error.toString() });
        }
      })();
      return true;

    case 'GET_ANALYSIS':
      (async () => {
        try {
          const result = await productAnalysisService.loadPreviousAnalysis(message.url);
          sendResponse({ success: true, data: result });
        } catch (error) {
          sendResponse({ success: false, error: error.toString() });
        }
      })();
  return true;

    case 'CLEAR_ANALYSIS':
      (async () => {
        try {
          await productAnalysisService.clearAnalysis(message.url);
          sendResponse({ success: true });
        } catch (error) {
          sendResponse({ success: false, error: error.toString() });
        }
      })();
      return true;

    case 'INITIALIZE_SERVICE':
      (async () => {
        try {
          await productAnalysisService.initialize();
          sendResponse({ success: true });
        } catch (error) {
          console.error('Failed to initialize service:', error);
          sendResponse({ success: false, error: error.toString() });
        }
      })();
      return true;
  }

  return false;
});

// Handle installation and cleanup
chrome.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === 'install') {
    try {
      await productAnalysisService.initialize();
      console.log("Product analysis service initialized on install");
    } catch (error) {
      console.error('Failed to initialize product analysis service:', error);
    }
  }
});

chrome.runtime.onSuspend.addListener(() => {
  console.log("Extension suspending, cleaning up...");
  if (productAnalysisService) {
    productAnalysisService.destroy();
  }
});
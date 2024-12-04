class DietaryAdvisor {
  constructor() {
    this.session = null;
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized) return;

    try {
      this.session = await ai.languageModel.create({
        systemPrompt: `You are a nutrition and dietary expert. Your role is to:
1. Analyze food items for potential allergens and intolerances
2. Suggest alternative foods that provide similar nutritional benefits
3. Explain potential health implications
4. Provide scientific explanations when relevant

Format responses as follows:
CONCERNS: [List potential health concerns]
EFFECTS: [Describe potential effects]
ALTERNATIVES: [List alternative foods]`,
        temperature: 0.3,
        topK: 1
      });

      this.initialized = true;
    } catch (error) {
      console.error('Failed to initialize dietary advisor:', error);
      throw error;
    }
  }

  async getAdvice(food, userProfile) {
    try {
      if (!this.initialized) await this.initialize();

      const prompt = `Analyze this food item: "${food.title}"
User's dietary concerns: ${JSON.stringify(userProfile.restrictions || [])}
Allergies: ${JSON.stringify(userProfile.allergies || [])}
Intolerances: ${JSON.stringify(userProfile.intolerances || [])}

Consider the ingredients and nutrition content: ${JSON.stringify(food.nutritionData)}
Provide detailed advice about health implications and alternatives.`;

      const response = await this.session.prompt(prompt);
      return this.parseAdvice(response);
    } catch (error) {
      console.error('Failed to get dietary advice:', error);
      throw error;
    }
  }

  parseAdvice(text) {
    const sections = text.split('\n');
    const result = {
      concerns: [],
      effects: [],
      alternatives: [],
      nutritionMatch: [],
      preparationTips: []
    };

    let currentSection = '';
    sections.forEach(line => {
      if (line.includes('CONCERNS:')) {
        currentSection = 'concerns';
      } else if (line.includes('EFFECTS:')) {
        currentSection = 'effects';
      } else if (line.includes('ALTERNATIVES:')) {
        currentSection = 'alternatives';
      } else if (line.trim() && currentSection) {
        result[currentSection].push(line.trim());
      }
    });

    return result;
  }

  destroy() {
    if (this.session) {
      this.session.destroy();
      this.session = null;
    }
    this.initialized = false;
  }
}

export default new DietaryAdvisor();
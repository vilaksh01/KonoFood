import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import {
  User,
  FileText,
  Brain,
  Sparkles,
  AlertCircle,
  Settings,
  RotateCcw,
  Apple,
  Beaker,
  ArrowRight,
  Check,
  RefreshCw,
  AlertTriangle,
  ShieldAlert
} from 'lucide-react';
import NutritionAnalysis from './NutritionAnalysis';
import UserProfile from './DietaryPreferences';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card } from '@/components/ui/theme';

const LoadingProgress = ({ status, onCancel }) => {
  const [loadingText, setLoadingText] = useState('');
  const thoughts = [
    "Analyzing nutritional content and ingredients...",
    "Evaluating health impact and benefits...",
    "Checking allergens and dietary restrictions...",
    "Finding alternative food suggestions...",
    "Calculating nutritional scores...",
    "Analyzing ingredient interactions...",
    "Evaluating preparation recommendations...",
    "Checking for potential health effects...",
    "Processing serving size information...",
    "Analyzing ingredient quality...",
    "Generating personalized recommendations..."
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setLoadingText(thoughts[currentIndex]);
      currentIndex = (currentIndex + 1) % thoughts.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6 p-6">
      {/* Animated Brain Icon */}
      <div className="relative">
        <Brain size={48} className="text-purple-400 animate-pulse" />
        <div className="absolute -inset-4">
          <div className="w-24 h-24 rounded-full bg-purple-500/20 animate-ping" />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-sm">
        <div className="bg-white/5 rounded-full p-1">
          <div
            className="h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300"
            style={{
              width: `${((status?.stepIndex || 0) + 1) * (100 / (status?.totalSteps || 12))}%`
            }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>Step {status?.stepIndex + 1 || 1} of {status?.totalSteps || 12}</span>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Current Status */}
      <div className="text-center space-y-2">
        <p className="text-xl font-medium bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
          {status?.message || "Processing..."}
        </p>
        <p className="text-sm text-gray-400">{loadingText}</p>
      </div>

      {/* Processing Indicators */}
      <div className="flex gap-4">
        <div className="px-4 py-1.5 rounded-full bg-white/5 flex items-center gap-2">
          <Sparkles size={14} className="text-purple-400" />
          <span className="text-sm text-gray-300">AI Active</span>
        </div>
        <div className="px-4 py-1.5 rounded-full bg-white/5 flex items-center gap-2">
          <RefreshCw size={14} className="text-green-400 animate-spin" />
          <span className="text-sm text-gray-300">Processing</span>
        </div>
      </div>

      {/* If there are allergens found during analysis */}
      {status?.allergenFound && (
        <div className="w-full max-w-sm bg-red-500/10 rounded-lg p-4 border border-red-500/20">
          <div className="flex items-center gap-2 text-red-400">
            <AlertTriangle size={16} />
            <span className="text-sm font-medium">Allergen Alert</span>
          </div>
          <p className="text-sm text-red-300 mt-1">
            Potential allergens detected. Please wait for complete analysis.
          </p>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);
  const [currentUrl, setCurrentUrl] = useState('');
  const [status, setStatus] = useState(null);
  const [initialized, setInitialized] = useState(false);
  const [userPreferences, setUserPreferences] = useState(null);

  useEffect(() => {
    const loadInitialState = async () => {
      try {
        // Get persisted analysis state
        const result = await chrome.runtime.sendMessage({
          type: 'GET_PERSISTED_STATE'
        });

        if (result?.state) {
          setLoading(result.state.loading);
          setStatus(result.state.status);
          if (result.state.analysis) {
            setAnalysis(result.state.analysis);
            setActiveTab('nutrition');
          }
        }

        // Get user preferences
        const { userPreferences } = await chrome.storage.local.get('userPreferences');
        if (userPreferences) {
          setUserPreferences(userPreferences);
        } else {
          setActiveTab('profile');
        }

        // Get current tab analysis if exists
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        if (tab?.url) {
          setCurrentUrl(tab.url);
          const analysisResult = await chrome.runtime.sendMessage({
            type: 'GET_ANALYSIS',
            url: tab.url
          });

          if (analysisResult?.data) {
            setAnalysis(analysisResult.data);
            setActiveTab('nutrition');
          }
        }
      } catch (error) {
        console.error('Error loading initial state:', error);
      } finally {
        setInitialized(true);
      }
    };

    // Set up message listeners
    const messageListener = (message) => {
      console.log('Received message in popup:', message);

      switch (message.type) {
        case 'ANALYSIS_STATUS':
          setStatus(message.status);
          break;
        case 'ANALYSIS_COMPLETE':
          setLoading(false);
          setAnalysis(message.data);
          setActiveTab('nutrition');
          setError(null);
          setStatus(null);
          break;
        case 'ANALYSIS_ERROR':
          setLoading(false);
          setError(message.error);
          setStatus(null);
          break;
        case 'ALLERGEN_ALERT':
          setStatus(prev => ({ ...prev, allergenFound: true }));
          break;
      }
    };

    chrome.runtime.onMessage.addListener(messageListener);
    loadInitialState();

    return () => {
      chrome.runtime.onMessage.removeListener(messageListener);
    };
  }, []);

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);
    setAnalysis(null);
    setStatus(null);

    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

      if (!tab?.url?.startsWith('http')) {
        throw new Error('Please navigate to a product page to analyze');
      }

      setCurrentUrl(tab.url);
      await chrome.runtime.sendMessage({ type: 'INITIALIZE_SERVICE' });

      try {
        await chrome.tabs.sendMessage(tab.id, { type: 'PING' });
      } catch {
        console.log('Injecting content script...');
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['content.js']
        });
      }

      await chrome.tabs.sendMessage(tab.id, { type: 'ANALYZE_REQUEST' });
    } catch (error) {
      console.error('Analysis error:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  const handleCancel = async () => {
    try {
      await chrome.runtime.sendMessage({ type: 'CANCEL_ANALYSIS' });
      setLoading(false);
      setStatus(null);
    } catch (error) {
      console.error('Cancel error:', error);
    }
  };

  const handleReset = async () => {
    try {
      await chrome.runtime.sendMessage({
        type: 'CLEAR_ANALYSIS',
        url: currentUrl
      });
      setAnalysis(null);
      setError(null);
    } catch (error) {
      console.error('Reset error:', error);
    }
  };

  if (!initialized) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950">
        <div className="w-8 h-8 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white">
      {/* Header */}
      <header className="sticky top-0 backdrop-blur-md bg-black/10 border-b border-white/10 p-4">
        <nav className="flex gap-4">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 relative group overflow-hidden rounded-xl px-4 py-2 transition-all duration-300
              ${activeTab === 'profile' 
                ? 'bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg shadow-purple-500/25' 
                : 'hover:bg-white/5'}`}
          >
            <span className="flex items-center justify-center gap-2">
              <User size={18} />
              <span>Profile</span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab('nutrition')}
            className={`flex-1 relative group overflow-hidden rounded-xl px-4 py-2 transition-all duration-300
              ${activeTab === 'nutrition'
                ? 'bg-gradient-to-r from-violet-600 to-purple-600 shadow-lg shadow-purple-500/25' 
                : 'hover:bg-white/5'}`}
          >
            <span className="flex items-center justify-center gap-2">
              <Beaker size={18} />
              <span>Analysis</span>
            </span>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {loading ? (
          <LoadingProgress status={status} onCancel={handleCancel} />
        ) : (
          <div className="p-4 space-y-4">
            {activeTab === 'profile' ? (
              <UserProfile
                onComplete={(prefs) => {
                  setUserPreferences(prefs);
                  setActiveTab('nutrition');
                }}
                currentPreferences={userPreferences}
              />
            ) : (
              <div className="space-y-4">
                {/* Action Button */}
                <button
                  onClick={handleAnalyze}
                  disabled={loading || !userPreferences}
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600
                           hover:from-violet-500 hover:to-purple-500
                           p-4 rounded-xl transition-all duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed
                           flex items-center justify-center gap-3
                           shadow-lg shadow-purple-500/25"
                >
                  <Brain size={20} />
                  <span className="font-medium">Analyze Product</span>
                  <ArrowRight size={20} />
                </button>

                {!userPreferences && (
                  <Alert variant="default">
                    <AlertDescription className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4" />
                      Please set up your dietary preferences first
                    </AlertDescription>
                  </Alert>
                )}

                {/* Error Message */}
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-red-400">Analysis Error</h3>
                        <p className="text-sm text-red-300/80">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Analysis Results */}
                {analysis && <NutritionAnalysis analysis={analysis} userPreferences={userPreferences} />}

                {/* Empty State */}
                {!loading && !error && !analysis && (
                  <div className="text-center bg-white/5 rounded-xl p-8 backdrop-blur-sm">
                    <Apple size={48} className="mx-auto mb-4 text-purple-400" />
                    <h3 className="text-xl font-medium mb-2">Ready to Analyze</h3>
                    <p className="text-gray-400 mb-6">
                      Navigate to a product page and click analyze to get started
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span>AI-Powered</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span>Fast Analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span>Personalized</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="backdrop-blur-md bg-black/10 border-t border-white/10 p-3">
        <div className="flex justify-between items-center text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Brain size={14} className="text-purple-400" />
            <span>Powered by Gemini & Nutritionix</span>
          </div>
          <div className="flex items-center gap-3">
            {analysis && (
              <button
                onClick={handleReset}
                className="p-1.5 hover:bg-white/5 rounded-lg transition-colors"
                title="Reset Analysis"
              >
                <RotateCcw size={14} />
              </button>
            )}
            <button
              onClick={() => window.open('options.html', '_blank')}
              className="p-1.5 hover:bg-white/5 rounded-lg transition-colors"
              title="Settings"
            >
              <Settings size={14} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
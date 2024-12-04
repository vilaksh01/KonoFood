import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Save, AlertCircle, Loader2, Apple } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Panel } from '@/components/ui/theme';

const DIETARY_SCHEMA = {
  restrictions: {
    title: 'Dietary Restrictions',
    options: [
      { value: 'vegetarian', label: 'Vegetarian' },
      { value: 'vegan', label: 'Vegan' },
      { value: 'gluten-free', label: 'Gluten Free' },
      { value: 'dairy-free', label: 'Dairy Free' },
      { value: 'nut-free', label: 'Nut Free' },
      { value: 'shellfish-free', label: 'Shellfish Free' }
    ]
  },
  preferences: {
    title: 'Nutritional Preferences',
    options: [
      { value: 'low-sugar', label: 'Low Sugar' },
      { value: 'low-sodium', label: 'Low Sodium' },
      { value: 'low-fat', label: 'Low Fat' },
      { value: 'high-protein', label: 'High Protein' },
      { value: 'low-carb', label: 'Low Carb' },
      { value: 'organic', label: 'Prefer Organic' }
    ]
  },
  alerts: {
    title: 'Ingredient Alerts',
    options: [
      { value: 'artificial-colors', label: 'Artificial Colors' },
      { value: 'artificial-sweeteners', label: 'Artificial Sweeteners' },
      { value: 'preservatives', label: 'Preservatives' },
      { value: 'msg', label: 'MSG' },
      { value: 'added-sugars', label: 'Added Sugars' },
      { value: 'trans-fats', label: 'Trans Fats' }
    ]
  }
};

const DietaryPreferences = () => {
  const [preferences, setPreferences] = useState({
    restrictions: [],
    preferences: [],
    alerts: []
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    loadPreferences();
  }, []);

  const loadPreferences = async () => {
    try {
      const result = await chrome.storage.local.get('userPreferences');
      if (result.userPreferences) {
        setPreferences(result.userPreferences);
      }
    } catch (error) {
      console.error('Failed to load preferences:', error);
      setMessage({
        type: 'error',
        text: 'Failed to load preferences'
      });
    }
  };

  const handleToggle = (category, value) => {
    setPreferences(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await chrome.storage.local.set({
        userPreferences: {
          ...preferences,
          lastUpdated: new Date().toISOString()
        }
      });

      setMessage({
        type: 'success',
        text: 'Preferences saved successfully'
      });

      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Failed to save preferences:', error);
      setMessage({
        type: 'error',
        text: 'Failed to save preferences'
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Apple className="w-5 h-5" />
          Dietary Preferences
        </h2>
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700
                   disabled:opacity-50 flex items-center gap-2 text-white"
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          Save
        </button>
      </div>

      {/* Message Alert */}
      {message && (
        <Alert variant={message.type === 'success' ? 'default' : 'destructive'}>
          <AlertDescription>{message.text}</AlertDescription>
        </Alert>
      )}

      {/* Preferences Sections */}
      {Object.entries(DIETARY_SCHEMA).map(([category, section]) => (
        <Panel key={category}>
          <h3 className="text-lg font-medium text-gray-200 mb-4">
            {section.title}
          </h3>
          <div className="space-y-3">
            {section.options.map(option => (
              <label key={option.value} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={preferences[category]?.includes(option.value)}
                  onChange={() => handleToggle(category, option.value)}
                  className="w-4 h-4 rounded border-gray-600 bg-gray-700
                           text-purple-600 focus:ring-purple-500"
                />
                <span className="text-gray-300">{option.label}</span>
              </label>
            ))}
          </div>
        </Panel>
      ))}

      {/* Info Note */}
      <div className="flex items-start gap-2 text-sm text-gray-400">
        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <p>
          These preferences will be used to customize product recommendations
          and highlight relevant nutritional information.
        </p>
      </div>
    </div>
  );
};

export default DietaryPreferences;
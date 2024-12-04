import { h } from 'preact';
import { AlertTriangle, Heart, Apple, ArrowRight, Info } from 'lucide-react';
import { Panel } from '@/components/ui/theme';

const HealthAdvisory = ({ data }) => {
  if (!data) return null;

  // Helper function to clean markdown formatting
  const cleanMarkdown = (text) => {
    if (!text) return '';
    return text
      .replace(/\*\*/g, '') // Remove bold markdown
      .replace(/^\* /gm, '') // Remove bullet points
      .trim();
  };

  // Helper to process alternatives by category
  const processAlternatives = (alternatives) => {
    const processed = [];
    let currentCategory = '';

    alternatives.forEach(alt => {
      if (alt.includes(':**')) {
        // This is a category header
        currentCategory = cleanMarkdown(alt.split(':')[0]);
      } else {
        // This is an alternative item
        processed.push({
          category: currentCategory,
          text: cleanMarkdown(alt)
        });
      }
    });

    // Group by category
    const grouped = processed.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item.text);
      return acc;
    }, {});

    return grouped;
  };

  // Process concerns to remove markdown formatting
  const concerns = data.concerns?.map(cleanMarkdown) || [];
  const effects = data.effects?.map(cleanMarkdown) || [];
  const alternatives = data.alternatives ? processAlternatives(data.alternatives) : {};

  return (
    <div className="space-y-4">
      {/* Health Overview Panel */}
      <Panel>
        <div className="flex items-center gap-2 mb-4">
          <Heart className="w-5 h-5 text-red-400" />
          <h3 className="text-lg font-medium">Health Overview</h3>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{data.score || 0}</span>
              </div>
              <div className="flex-1">
                <div className="text-sm text-gray-400">Health Score</div>
                <div className="text-gray-300">
                  {data.score >= 80 ? 'Excellent choice' :
                   data.score >= 60 ? 'Good with some concerns' :
                   'Improvement recommended'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Panel>

      {/* Health Concerns Panel */}
      {concerns.length > 0 && (
        <Panel>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-medium">Key Health Concerns</h3>
          </div>

          <div className="space-y-3">
            {concerns.map((concern, index) => (
              <div key={index} className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <div className="text-sm text-gray-300">{concern}</div>
              </div>
            ))}
          </div>
        </Panel>
      )}

      {/* Alternatives Panel - Now organized by category */}
      {Object.keys(alternatives).length > 0 && (
        <Panel>
          <div className="flex items-center gap-2 mb-4">
            <Apple className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-medium">Recommended Alternatives</h3>
          </div>

          <div className="space-y-4">
            {Object.entries(alternatives).map(([category, items], categoryIndex) => (
              <div key={categoryIndex} className="space-y-2">
                {category && (
                  <h4 className="text-sm font-medium text-green-400 ml-1">{category}</h4>
                )}
                <div className="grid gap-2">
                  {items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-lg">
                      <ArrowRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                      <div className="text-sm text-gray-300">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Panel>
      )}

      {/* Effects Panel */}
      {effects.length > 0 && (
        <Panel>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-medium">Potential Effects</h3>
          </div>

          <div className="space-y-2">
            {effects.map((effect, index) => (
              <div key={index} className="flex items-start gap-2 p-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                <div className="text-sm text-gray-300">{effect}</div>
              </div>
            ))}
          </div>
        </Panel>
      )}

      {/* Footer */}
      {/*<div className="flex items-start gap-2 text-sm text-gray-400">*/}
      {/*  <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />*/}
      {/*  /!*<p>Always check product labels for allergens and dietary restrictions. Recommendations are general guidelines only.</p>*!/*/}
      {/*</div>*/}
    </div>
  );
};

export default HealthAdvisory;
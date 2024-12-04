import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import {
  AlertTriangle,
  Heart,
  Leaf,
  AlertCircle,
  Check,
  Info,
  Scale,
  Beaker,
  Apple,
  Activity
} from 'lucide-react';
import { Panel } from '@/components/ui/theme';
import { Alert, AlertDescription } from '@/components/ui/alert';
import HealthAdvisory from './HealthAdvisory';
import ProductHeader from './ProductHeader';

const ScoreBadge = ({ score }) => {
  let color;
  if (score >= 80) color = 'bg-green-500/20 border-green-500/20 text-green-400';
  else if (score >= 60) color = 'bg-yellow-500/20 border-yellow-500/20 text-yellow-400';
  else color = 'bg-red-500/20 border-red-500/20 text-red-400';

  return (
    <div className={`px-3 py-1 rounded-full text-sm border flex items-center gap-2 ${color}`}>
      <Scale className="w-4 h-4" />
      Score: {score}/100
    </div>
  );
};

const NutritionAnalysis = ({ analysis }) => {
  const [activeSection, setActiveSection] = useState('overview');

  if (!analysis) {
    return (
      <div className="p-6 text-center">
        <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-gray-300 font-medium">No Analysis Available</h3>
        <p className="text-gray-500 text-sm mt-2">
          Please analyze a product to see nutrition details
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Score Card */}
      <div className="relative bg-gradient-to-br from-purple-600/20 to-purple-500/10 rounded-xl p-6 border border-purple-500/20">
        <ProductHeader
            title={analysis.productInfo?.title}
            category={analysis.productInfo?.category}
            score={analysis.score}
        />

        <div className="space-y-4">
          {/* Key Health Insights */}
          <div className="space-y-2">
            {analysis.healthInsights?.map((insight, i) => (
              <div key={i} className="flex items-start gap-2 text-gray-200">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>{insight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Tabs */}
      <div className="flex gap-2 p-1 bg-gray-800/50 rounded-lg">
        {['overview', 'health', 'nutrition'].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-md transition-all duration-300
              ${activeSection === section 
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' 
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'}`}
          >
            {section === 'overview' && <Activity size={18} />}
            {section === 'health' && <Heart size={18} />}
            {section === 'nutrition' && <Beaker size={18} />}
            <span className="capitalize">{section}</span>
          </button>
        ))}
      </div>

      {/* Section Content */}
      {activeSection === 'overview' && (
        <>
          {/* Nutrition Facts */}
          <Panel>
            <h3 className="flex items-center gap-2 text-lg font-medium text-gray-200 mb-4">
              <Heart className="w-5 h-5 text-red-400" />
              Key Nutrients
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {analysis.keyNutrients?.map((nutrient, i) => (
                <div key={i} className="p-3 bg-gray-800/30 rounded-lg">
                  <div className="text-sm text-gray-400">{nutrient}</div>
                </div>
              ))}
            </div>
          </Panel>

          {/* Dietary Information */}
          <Panel>
            <h3 className="flex items-center gap-2 text-lg font-medium text-gray-200 mb-4">
              <Leaf className="w-5 h-5 text-green-400" />
              Dietary Information
            </h3>
            <div className="space-y-2">
              {Object.entries(analysis.dietaryInfo || {}).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  {value ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-gray-500" />
                  )}
                  <span className="text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </>
      )}

      {activeSection === 'health' && (
        <>
          {/* Health Advisory */}
          {analysis.healthAdvisory && (
            <HealthAdvisory data={analysis.healthAdvisory} />
          )}

          {/* Allergens */}
          {analysis.allergens?.length > 0 && (
            <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
              <h3 className="flex items-center gap-2 text-lg font-medium text-red-400 mb-4">
                <AlertTriangle className="w-5 h-5" />
                Allergen Alert
              </h3>
              <div className="space-y-2">
                {analysis.allergens.map((allergen, i) => (
                  <div key={i} className="flex items-start gap-2 text-red-300">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                    <span>{allergen}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {activeSection === 'nutrition' && (
        <>
          {/* Nutrition Details */}
          <Panel>
            <h3 className="flex items-center gap-2 text-lg font-medium text-gray-200 mb-4">
              <Beaker className="w-5 h-5 text-blue-400" />
              Detailed Nutrition
            </h3>
            <div className="space-y-3">
              {analysis.nutritionData && Object.entries(analysis.nutritionData).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                  <span className="text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <span className="text-gray-400">{value?.toFixed(1) || 'N/A'}</span>
                </div>
              ))}
            </div>
          </Panel>

          {/* Recommendations */}
          {analysis.recommendations?.length > 0 && (
            <Panel>
              <h3 className="flex items-center gap-2 text-lg font-medium text-gray-200 mb-4">
                <Info className="w-5 h-5 text-blue-400" />
                Recommendations
              </h3>
              <div className="space-y-2">
                {analysis.recommendations.map((rec, i) => (
                  <div key={i} className="p-3 bg-gray-800/30 rounded-lg text-gray-300">
                    {rec}
                  </div>
                ))}
              </div>
            </Panel>
          )}
        </>
      )}

      {/* Source Info */}
      <div className="flex items-start gap-2 text-sm text-gray-400 mt-4">
        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <div>
          Analysis based on product information and Nutritionix database.
          Results are for reference only. Always verify with product packaging.
        </div>
      </div>
    </div>
  );
};

export default NutritionAnalysis;
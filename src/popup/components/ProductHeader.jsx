import { Scale } from 'lucide-react';

const ProductHeader = ({ title, category, score }) => {
  return (
    <div className="space-y-4">
      {/* Product Title and Category */}
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-white leading-tight">
          {title}
        </h2>
        <p className="text-gray-400 text-sm">
          {category}
        </p>
      </div>

      {/* Score Display */}
      <div className="flex items-center gap-2">
        <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20
                      rounded-xl border border-purple-500/20">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-purple-400" />
            <div>
              <div className="text-2xl font-bold text-purple-400">
                {score}/100
              </div>
              <div className="text-xs text-purple-300">
                Nutrition Score
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Clock } from 'lucide-react';

const TrendingCard = ({ article }) => {
    return (
        <Link
            to={`/article/${article.id}`}
            className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0 group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
        >
            {/* Icon */}
            <div className="mt-1 text-orange-500 group-hover:text-orange-600 transition-colors flex-shrink-0">
                <TrendingUp size={16} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold leading-snug text-gray-900 group-hover:text-orange-600 transition-colors">
                    {article.title}
                </h4>

                <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                    <span className="text-orange-600 font-medium">Trending</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{article.readTime}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TrendingCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';

const ArticleCard = ({ article }) => {
    return (
        <Link to={`/article/${article.id}`} className="block h-full">
            <article className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full">
                {/* Image - Fixed Height */}
                <div className="relative h-48 overflow-hidden bg-gray-100 flex-shrink-0">
                    <img
                        src={article.image}
                        alt={article.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content - Flexible with Fixed Structure */}
                <div className="p-5 flex flex-col flex-grow">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-600 bg-orange-50 rounded-full w-fit">
                        {article.category}
                    </span>

                    {/* Title - Fixed 2 lines */}
                    <h3 className="mt-3 text-lg font-bold leading-snug text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2 h-14">
                        {article.title}
                    </h3>

                    {/* Excerpt - Fixed 3 lines */}
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3 h-[60px] flex-grow">
                        {article.excerpt}
                    </p>

                    {/* Meta Info - Fixed at Bottom */}
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5">
                                <User size={14} className="flex-shrink-0" />
                                <span className="truncate max-w-[100px]">{article.author}</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <Clock size={14} className="flex-shrink-0" />
                                <span>{article.date}</span>
                            </div>
                        </div>

                        {/* Read More Arrow - Visible on Hover */}
                        <ArrowRight
                            size={16}
                            className="text-orange-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        />
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default ArticleCard;
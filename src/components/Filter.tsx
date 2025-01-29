import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Search, Filter as FilterIcon, X, Calendar, Tag } from 'lucide-react';
import { setFilter } from '../store/episodeSlice';

export const Filter: React.FC = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [episode, setEpisode] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(setFilter({ name: name || undefined, episode: episode || undefined }));
    };

    const handleClear = () => {
        setName('');
        setEpisode('');
        dispatch(setFilter({ name: undefined, episode: undefined }));
    };

    const hasFilters = name || episode;

    return (
        <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
                <FilterIcon className="w-5 h-5 text-blue-500" />
                <h2 className="text-lg font-semibold text-gray-700">Filter Episodes</h2>
                <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="ml-auto text-md text-blue-500 hover:text-blue-600"
                >
                    {isExpanded ? 'Hide Filters' : 'Show Filters'}
                </button>
            </div>

            <form
                onSubmit={handleSubmit}
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="p-6 space-y-4">
                    <div className="space-y-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by name..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                                         focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Filter by episode (e.g., S01)..."
                                value={episode}
                                onChange={(e) => setEpisode(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 
                                         focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                        <button
                            type="submit"
                            className="flex-1 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 
                                     transform transition-all active:scale-95 font-medium"
                        >
                            Apply Filters
                        </button>
                        {hasFilters && (
                            <button
                                type="button"
                                onClick={handleClear}
                                className="px-4 py-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 
                                         rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>
            </form>

            {hasFilters && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {name && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 
                                     rounded-full text-sm">
                            <Tag className="w-4 h-4" />
                            Name: {name}
                        </span>
                    )}
                    {episode && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 
                                     rounded-full text-sm">
                            <Calendar className="w-4 h-4" />
                            Episode: {episode}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default Filter;
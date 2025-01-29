import React from 'react';
import type { Episode } from '../types/types';
import { Calendar, Clock, Star } from 'lucide-react';
interface Props {
    episode: Episode;
}

export const EpisodeCard: React.FC<Props> = ({ episode }) => {
    return (
        <div
            className={`bg-gradient-to-br bg-white rounded-xl shadow-md 
                       hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
                      p-6`}
        >
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <Star className="w-6 h-6 text-blue-400" />
                        <span className="text-sm font-medium text-gray-500">
                            Featured Episode
                        </span>
                    </div>

                    <h2 className="text-2xl font-semibold text-gray-800 mb-3 line-clamp-2">
                        {episode.name}
                    </h2>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>Episode {episode.episode}</span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>{episode.air_date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

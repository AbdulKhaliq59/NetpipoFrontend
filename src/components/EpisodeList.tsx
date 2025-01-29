import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchEpisodes } from '../store/episodeSlice';
import { EpisodeCard } from './EpisodeCard';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

export const EpisodeList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { episodes, loading, error, currentPage, filter } = useSelector(
        (state: RootState) => state.episodes
    );

    useEffect(() => {
        dispatch(fetchEpisodes({ page: currentPage, filter }));
    }, [dispatch, currentPage, filter]);

    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <ClipLoader size={50} color='#36d7b7' />
        </div>
    )
    if (error) return toast.error(error);

    return (
        <div className="p-6">
            {episodes.length === 0 ? (
                <div className="flex justify-center items-center h-screen text-gray-500 text-lg">
                    No episodes available.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {episodes.map((episode) => (
                        <EpisodeCard key={episode.id} episode={episode} />
                    ))}
                </div>
            )}
        </div>

    );
};
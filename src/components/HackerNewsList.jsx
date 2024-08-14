import React from 'react';
import { useQuery } from '@tanstack/react-query';
import StoryCard from './StoryCard';
import StoryCardSkeleton from './StoryCardSkeleton';
import SearchBar from './SearchBar';
import { motion, AnimatePresence } from 'framer-motion';

const fetchTopStories = async () => {
  const response = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const HackerNewsList = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const { data, isLoading, error } = useQuery({
    queryKey: ['topStories'],
    queryFn: fetchTopStories,
  });

  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  const filteredStories = data?.hits.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          {isLoading
            ? Array(12).fill().map((_, index) => (
                <motion.div key={`skeleton-${index}`} layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <StoryCardSkeleton />
                </motion.div>
              ))
            : filteredStories.map((story, index) => (
                <motion.div
                  key={story.objectID}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <StoryCard story={story} />
                </motion.div>
              ))
          }
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default HackerNewsList;
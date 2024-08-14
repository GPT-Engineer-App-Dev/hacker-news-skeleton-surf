import React from 'react';
import HackerNewsList from '../components/HackerNewsList';
import { Terminal } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-hn-dark text-white">
      <header className="bg-hn-orange p-4">
        <div className="container mx-auto flex items-center">
          <Terminal className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold">HN Top 100</h1>
        </div>
      </header>
      <HackerNewsList />
    </div>
  );
};

export default Index;
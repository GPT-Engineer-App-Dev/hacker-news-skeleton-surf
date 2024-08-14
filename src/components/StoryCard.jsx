import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle, ExternalLink, MessageCircle } from 'lucide-react';

const StoryCard = ({ story }) => {
  return (
    <Card className="h-full flex flex-col bg-gray-800 border-gray-700 hover:border-hn-orange transition-colors duration-300">
      <CardContent className="flex-grow pt-6">
        <h2 className="text-xl font-semibold mb-2 text-hn-orange">{story.title}</h2>
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <ArrowUpCircle className="w-4 h-4 mr-1 text-hn-orange" />
          <span>{story.points} points</span>
          <MessageCircle className="w-4 h-4 ml-4 mr-1" />
          <span>{story.num_comments} comments</span>
        </div>
        <p className="text-sm text-gray-400">By {story.author}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full bg-hn-orange text-white hover:bg-hn-orange/80"
          onClick={() => window.open(story.url, '_blank')}
        >
          Read More <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;
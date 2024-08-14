import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const StoryCardSkeleton = () => {
  return (
    <Card className="h-full flex flex-col bg-gray-800 border-gray-700">
      <CardContent className="flex-grow pt-6">
        <Skeleton className="h-6 w-3/4 mb-2 bg-gray-700" />
        <Skeleton className="h-4 w-1/4 mb-4 bg-gray-700" />
        <Skeleton className="h-4 w-1/2 bg-gray-700" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-full bg-gray-700" />
      </CardFooter>
    </Card>
  );
};

export default StoryCardSkeleton;
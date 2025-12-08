import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const GameControlWidget = () => {
  return (
    <Card className="p-4 h-full">
      <h2 className="text-xl font-bold mb-4">Game Control</h2>
      <div className="space-y-4">
        <div className="p-2 bg-slate-100 rounded">
          <span className="font-semibold">Current Player:</span> Black
        </div>
        <Button className="w-full">New Game</Button>
      </div>
    </Card>
  );
};

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const HistoryWidget = () => {
  return (
    <Card className="p-4 h-full flex flex-col">
      <h2 className="text-xl font-bold mb-4">History</h2>
      <div className="flex-1 overflow-y-auto bg-slate-50 p-2 rounded mb-4">
        <ul className="space-y-1 text-sm">
          <li>1. Black (8, 8)</li>
          {/* Placeholder */}
        </ul>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="flex-1">
          Undo
        </Button>
        <Button variant="outline" className="flex-1">
          Redo
        </Button>
      </div>
    </Card>
  );
};

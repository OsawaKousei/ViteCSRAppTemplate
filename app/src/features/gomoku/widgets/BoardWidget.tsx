import { useEffect } from 'react';
import { useGomokuStore } from '../stores/useGomokuStore';
import { GomokuBoard } from '../components/GomokuBoard';
import { useNotificationActions } from '@/features/global-notification';

export const BoardWidget = () => {
  const board = useGomokuStore((state) => state.board);
  const history = useGomokuStore((state) => state.history);
  const historyIndex = useGomokuStore((state) => state.historyIndex);
  const winner = useGomokuStore((state) => state.winner);
  const placeStone = useGomokuStore((state) => state.placeStone);
  const initializeGame = useGomokuStore((state) => state.initializeGame);
  const { openModal } = useNotificationActions();

  useEffect(() => {
    if (winner) {
      const message = `${winner} won!`;
      openModal({
        title: 'Game Over',
        content: message,
        type: 'success',
        confirmText: 'Restart Game',
        cancelText: 'Close',
        onConfirm: initializeGame,
      });
    }
  }, [winner, openModal, initializeGame]);

  const lastMove =
    historyIndex >= 0 && history[historyIndex]
      ? history[historyIndex].coordinate
      : null;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <GomokuBoard board={board} lastMove={lastMove} onCellClick={placeStone} />
    </div>
  );
};

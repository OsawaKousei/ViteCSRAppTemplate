import { Routes, Route, Navigate } from 'react-router-dom';
import { BoardWidget } from '@/features/gomoku';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/gomoku" replace />} />
      <Route path="/gomoku" element={<BoardWidget />} />
      <Route path="*" element={<div className="p-4">404 Not Found</div>} />
    </Routes>
  );
};

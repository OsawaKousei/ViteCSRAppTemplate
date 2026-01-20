import { Suspense, useEffect, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/routes/AppRoutes';
import {
  GlobalNotificationWidget,
  useNotificationActions,
} from '@/features/global-notification';

const AppContent = () => {
  const { showToast } = useNotificationActions();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) return;
    isMounted.current = true;

    showToast({
      title: 'Welcome',
      message: 'Welcome to the Gomoku SPA!',
      type: 'info',
    });
  }, [showToast]);

  return (
    <>
      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <AppRoutes />
      </Suspense>
      <GlobalNotificationWidget />
    </>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

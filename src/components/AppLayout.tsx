import React from 'react';
import type { ReactNode } from 'react';
import Loader from './Loader';
import { useLoader } from './useLoader';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const loading = useLoader();
  if (loading) return <Loader />;
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="m-0">{children}</main>
    </div>
  );
};

export default AppLayout; 
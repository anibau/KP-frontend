import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import PageHeader from '../components/PageHeader';
import HorizontalMenu from '../components/HorizontalMenu';

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <AppLayout>
      <div className="m-0">
        <PageHeader onHamburgerClick={() => setMenuOpen(v => !v)} />
        <HorizontalMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        {/* Aquí puedes seguir migrando más widgets y cards del dashboard */}
      </div>
    </AppLayout>
  );
};

export default Home; 
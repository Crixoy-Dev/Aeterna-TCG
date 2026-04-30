import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import Battlegrounds from './components/Battlegrounds';
import CardGallery from './components/CardGallery';

function App() {
  const [currentScreen, setCurrentScreen] = useState('menu');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'menu':
        return <MainMenu onNavigate={setCurrentScreen} />;
      case 'battlegrounds':
        return <Battlegrounds onBack={() => setCurrentScreen('menu')} />;
      case 'gallery':
        return <CardGallery onBack={() => setCurrentScreen('menu')} />;
      default:
        return <MainMenu onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="app-container">
      {renderScreen()}
    </div>
  );
}

export default App;

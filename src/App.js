import React from 'react';
import './App.css';
import MenuDisplay from './components/MenuDisplay';
import menus from './data/menus';

function App() {
  // Günün menüsünü hesapla: Ayın gün numarası (1-31) mod 30 (0-based index için -1)
  const today = new Date();
  const dayIndex = (today.getDate() - 1) % 30; // 0-29 arası döngü
  const gununMenusu = menus[dayIndex];

  return (
    <div className="App">
      <header className="app-header">
        <h1>Bugün Ne Yesem?</h1>
        <p>{today.toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </header>
      <MenuDisplay menu={gununMenusu} />
    </div>
  );
}

export default App;
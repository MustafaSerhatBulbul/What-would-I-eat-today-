import React from 'react';

const MenuDisplay = ({ menu }) => {
  const menuItems = [
    { title: 'Çorba', item: menu.corba, icon: '🥣' },
    { title: 'Ana Yemek', item: menu.anaYemek, icon: '🍲' },
    { title: 'Ara Sıcak', item: menu.araSicak, icon: '🔥' },
    { title: 'Extra', item: menu.extra, icon: '🍽️' }
  ];

  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <div key={index} className="menu-card">
          <div className="card-icon">{item.icon}</div>
          <h2>{item.title}</h2>
          <p className="menu-item">{item.item}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuDisplay;
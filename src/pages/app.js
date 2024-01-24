// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Card from './components/cards/Card';
import ItemDetails from './components/details/ItemDetails';

const App = () => {
  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    // Add more items as needed
  ];

  return (
    <Router>
      <div className="bg-gray-200 min-h-screen">
        <h1 className="text-4xl font-bold text-center py-8">Dynamic Routes with Tailwind CSS</h1>

        <div className="flex flex-wrap justify-center">
          {items.map((item) => (
            <Card key={item.id} itemId={item.id} itemName={item.name} />
          ))}
        </div>

        <Route path="/items/:itemId" component={ItemDetails} />
      </div>
    </Router>
  );
};

export default App;

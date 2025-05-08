import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { StorePage } from './pages/StorePage';
import ARStorefront from './scenes/ARStorefront';
import ThemeToggle from './components/ThemeToggle';
import MyStore from './pages/MyStore';

// Mock store data
const mockStore = {
  name: "My Virtual Store",
  products: [
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      description: "A great product",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Product 2",
      price: 39.99,
      description: "Another great product",
      image: "https://via.placeholder.com/150"
    }
  ]
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<MyStore />} />
          <Route path="/popup" element={<ARStorefront store={mockStore} />} />
          <Route path="/join" element={<div>Join POP Page (Coming Soon)</div>} />
          <Route path="/customize" element={<div>Avatar Customization Page (Coming Soon)</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App; 
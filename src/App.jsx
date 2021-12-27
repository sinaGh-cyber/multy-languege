import React from 'react';
import Navbar from './Navbar';
import { LanguageProvider } from './context';
import { useContext } from 'react';
import { createContext } from 'react';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  );
}

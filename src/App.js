import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { CreaturesFPage } from './Pages/CreaturesFPage';
import { CreaturesNFPage } from './Pages/CreaturesNFPage';
import { EquipmentPage } from './Pages/EquipmentPage';
import { MaterialsPage } from './Pages/MaterialsPage';
import { MonstersPage } from './Pages/MonstersPage';
import { CompendiumContext } from './CompendiumContext';
import { useState, useEffect } from 'react';
import React from 'react';
import ReactLoading from 'react-loading'
import './fonts/HyliaSerifBeta-Regular.otf';
import './App.css';

export default function App() {
  const [compendium, setCompendium] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  // Pulls all info from the API to be mapped later
  useEffect(() => {
     fetch('https://botw-compendium.herokuapp.com/api/v2/all')
      .then((response) => {
        if (!response.ok) {
          throw new Error("The status is ${response.status}");  
        }
        return response.json();
      })
      .then((data) => {
        setCompendium(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setCompendium(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [])

  // Adds a loading animation when first opening and refreshing the page
  if (loading) {
    return (
      <div className="loading">
        <ReactLoading type="cylon" color="ivory"
          height={200} width={100} />
      </div>
    )
  } else {

  // All the pages with the context provider wrapping them
  return (
    <CompendiumContext.Provider value={compendium}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='creaturesf' element={<CreaturesFPage />} />
        <Route path='creaturesnf' element={<CreaturesNFPage />} />
        <Route path='equipment' element={<EquipmentPage />} />
        <Route path='materials' element={<MaterialsPage />} />
        <Route path='monsters' element={<MonstersPage />} />
      </Routes>
    </CompendiumContext.Provider>
  );
}
}


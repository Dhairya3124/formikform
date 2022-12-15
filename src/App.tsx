import React from 'react';
import { GeneralForm } from './components/GeneralForm';
import { MaleForm } from './components/MaleForm';
import { FemaleForm } from './components/FemaleForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Results } from './components/Results';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* The below code is used to render the routes for the application */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GeneralForm />} />
            <Route path="/maleform" element={<MaleForm />} />
            <Route path="/femaleform" element={<FemaleForm />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

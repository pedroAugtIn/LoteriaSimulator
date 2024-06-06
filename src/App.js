import React, { useState } from 'react';
import Regras from './components/regras';
import Tabela from './components/tabela';
import Main from './components/main';
import './App.css';

function App() {
  const [view, setView] = useState('regras'); // estado inicial como 'regras'

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className='bg-blue-500 min-h-screen w-full flex flex-col justify-center items-center'>
      <div className='flex my-6 justify-center sm:my-0'>
        <h1 className='text-4xl text-white font-bold text-center sm:text-5xl lg:text-6xl'>Mega Sena Simulator</h1>
      </div>

      <div id='main' className='w-full flex justify-center mb-10 p-4'>
        <div className='w-full max-w-4xl'>
          {view === 'regras' && <Regras onButtonClick={() => handleViewChange('tabela')} />}
          {view === 'tabela' && <Tabela onButtonClick={() => handleViewChange('main')} />}
          {view === 'main' && <Main />}
        </div>
      </div>
    </div>
  );
}

export default App;

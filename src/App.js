
import React from 'react'

import stylesBase from './assets/styles/Base.module.scss'

import Sidebar from './components/Sidebar'
import Main from './components/Main'


function App() {
  return (
    <div className={stylesBase.App}>

      <div className={stylesBase.container}>
        <Sidebar />
        <Main />
      </div>       

    </div>
  );
}

export default App;

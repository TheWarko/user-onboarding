
import React from 'react'

import stylesButton from './assets/styles/Button.module.scss'
import stylesBase from './assets/styles/Base.module.scss'

import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className={stylesBase.App}>

      <div className={stylesBase.container}>
        <Sidebar />
        <div className={stylesBase.main}>
          <a className={stylesButton.button} >Ciao Mondo!</a>
        </div>
      </div>       

    </div>
  );
}

export default App;


import {useState} from 'react'
import stylesBase from './assets/styles/Base.module.scss'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import StepContext from './contexts/StepContext'



function App() {

  const [step, setStep] = useState(1);

  return (
    <StepContext.Provider value={[step, setStep]}>
      <div className={stylesBase.App}>
        <div className={stylesBase.container}>
          <Sidebar />
          <Main />
        </div>       
      </div>
    </StepContext.Provider>
  );
}

export default App;

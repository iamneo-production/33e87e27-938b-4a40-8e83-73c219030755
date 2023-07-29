import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context';
import AppRoute from './router/Approute';
<<<<<<< HEAD
=======
// import './style.scss';
>>>>>>> Project-Workspace-anjanisree18

function App() {
  return (
    <>
     <ContextProvider>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
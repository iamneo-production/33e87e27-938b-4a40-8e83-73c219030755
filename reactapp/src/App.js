import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context';
import AppRoute from './router/Approute';
<<<<<<< HEAD
<<<<<<< HEAD
=======
// import './style.scss';
>>>>>>> Project-Workspace-anjanisree18
=======
>>>>>>> afd7048be635e9bbb36f5f4adf3cc0b5b122f5d3

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
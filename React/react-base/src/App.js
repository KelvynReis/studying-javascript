import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';

import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Routers from './router';

export default function App() {
  return (
    <Router history={history}>
      <Header />
      <Routers />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
  );
}

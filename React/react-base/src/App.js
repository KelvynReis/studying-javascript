import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Header from './components/Header';

import store from './store';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Routers from './router';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routers />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toast-container" />
      </Router>
    </Provider>
  );
}

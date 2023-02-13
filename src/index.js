import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { persistore, store } from './Redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistore}>
          <App />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);

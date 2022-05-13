// Dependencias
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// Componentes y funciones
import AppRouter from './routes/AppRouter';
import { store } from './redux/store/store';
// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

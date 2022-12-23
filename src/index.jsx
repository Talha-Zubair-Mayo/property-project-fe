import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/app.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import { Provider } from 'react-redux';
import createStore from './store/ConfigureStore';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import "react-phone-input-2/lib/material.css";

AOS.init({
  duration: 1200,
});
const { store } = createStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
      />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

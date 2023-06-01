import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import RouterComp from './routes';
import store from './store';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <ToastContainer />
          <RouterComp />
        </Provider>
      </Router>
    </>
  );
}

export default App;

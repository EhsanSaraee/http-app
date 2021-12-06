import Discussion from './Containers/Discussion/Discussion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';

const App = () => {
   return (
      <div className="app">
         <ToastContainer />
         <Discussion />
      </div>
   );
};

export default App;

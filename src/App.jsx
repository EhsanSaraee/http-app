import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import Layout from './Components/Layout/Layout';
import routes from './routes';

const App = () => {
   return (
      <div className="app">
         <ToastContainer />
         <Layout>
            <Switch>
               {routes.map((route, index) => (
                  <Route key={index} {...route} />
               ))}
            </Switch>
         </Layout>
      </div>
   );
};

export default App;

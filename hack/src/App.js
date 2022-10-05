import {BrowserRouter as Router,Route} from 'react-router-dom'
import Ticket from './compo/Ticket';
import Login from './Login'
import Register from './Register';
import Protectedrouter from './protectedrouter';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <div className='App' >
      <Router>
<Route exact path="/" component ={Login}/>
<Route  exact path="/register" component ={Register}/>
<Protectedrouter exact path="/home" component={Ticket}/>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;

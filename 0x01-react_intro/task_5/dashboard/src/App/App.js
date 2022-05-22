import './App.css';
import logo from './holberton-logo.jpg';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor='emailInput'>Email: </label>
        <input id='emailInput' type='text'></input>
        <label htmlFor='passwordInput'>Password: </label>
        <input id='passwordInput' type='password'></input>
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import imgfile from './img/logo_tmp.png';
import './App.css';


function App() {
  return (
    <div className = "container">
      <div className = "app">
        <img className ="logo" alt="logo" src = {imgfile}/>
        <hr width = "100%"></hr>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import imgfile from './img/logo_tmp.png';
import './App.css';


function App() {
  return (
    <div className = "container">
      <div className = "head">
        <img className ="logo" alt="logo" src = {imgfile}/>
        <hr width = "100%"></hr>
        <hr width = "100%"></hr>
      </div>

      <div className = "topics">
        <button className ="login">SignIn</button>
      </div>
    </div>
  );
}

export default App;

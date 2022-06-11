import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Form from './components/Form';

function App() {

  const [toggle, setToggle] = useState(false);

  const changeBackground = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <div className={toggle ? "dark" : "light"}>
        <button onClick={changeBackground} 
        className={toggle ? "btn btn-light m-3" : "btn btn-dark m-3"}> 
          {toggle ? "Light mode" : "Dark mode"} 
        </button>
        <h1 className="text-center mt-3"> My Kanban board </h1>
        <Form/>
      </div>
    </div>
  );

}

export default App;
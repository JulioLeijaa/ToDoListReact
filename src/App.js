// import logo from './logo.svg';
import './App.css';
import ListaTareas from './components/ListaTareas/ListaTareas';

function App() {
  return (
    <div className="App">
       <center>
         <h1>Lista de Tareas</h1>
       </center>

       <div className='tareas-lista-principal'>
          <ListaTareas />
       </div>
    </div>
  );
}

export default App;

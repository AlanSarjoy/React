import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import './App.css'




function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer  greeting={"Bienvenidos a DecoTodoVuelve"}/>
    </>
  )
}

export default App

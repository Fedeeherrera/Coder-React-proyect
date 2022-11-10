import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./container/ItemListContainer";


function App() {
  return (
    
    <div className="App">
      <NavBar />
      <ItemListContainer msg="BIENVENIDO A LA TIENDA DE ROPA" />
    </div>
  );
}

export default App;

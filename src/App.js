import "./App.css";
import NavBar from "./components/NavBar";
import ListContainer from "./components/ListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ListContainer msg="BIENVENIDOS A MI TIEDA REY" />
    </div>
  );
}

export default App;

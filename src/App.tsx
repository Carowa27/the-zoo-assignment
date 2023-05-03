import { useEffect } from "react";
import "./App.css";
import "./components/Animal/animal.scss";
import { getAnimals } from "./services/animalService";

function App() {
  useEffect(() => {
    getAnimals();
  }, []);

  return <></>;
}

export default App;

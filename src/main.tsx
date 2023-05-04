import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { getAnimals } from "./services/animalService";

useEffect(() => {
  getAnimals();
  updateAnimals();
}, []);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const updateAnimals = () => {
  //hämta lista
  //kontrollera tider
  //har det gått 3tim ändra isFed=false
};

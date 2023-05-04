import axios from "axios";
import { IAnimal } from "../models/IAnimal";
import { useEffect, useState } from "react";

// export const getAnimals = async (): Promise<IAnimal[]> => {
//   let response = await axios.get<IAnimal[]>(
//     `https://animals.azurewebsites.net/api/animals`
//   );
//   console.log(response.data);
//   return response.data;
// };
// export const fetchAnimals = async () => {
//   const response = await fetch("https://animals.azurewebsites.net/api/animals");
//   const jsonData = await response.json();
//   console.log(jsonData);
//   // setAnimalList(json);
//   // localStorage.setItem("savedAnimalList", JSON.stringify(animalList));
//   return jsonData;
// };

export const getAnimals = (): Promise<IAnimal[]> => {
  console.log("start fetch");

  return fetch("https://animals.azurewebsites.net/api/animals")
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("savedAnimalList", JSON.stringify(data));
      return data;
    })
    .catch(console.error);
};

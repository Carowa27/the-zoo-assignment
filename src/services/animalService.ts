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

const [allAnimals, setAllAnimals] = useState<IAnimal[]>(
  JSON.parse(localStorage.getItem("savedAnimalList") || JSON.stringify([]))
);

export const getAnimals = () => {
  if (allAnimals.length! === 0) {
    fetch("https://animals.azurewebsites.net/api/animals")
      .then((res) => res.json())
      .then(setAllAnimals)
      .catch(console.error);
    console.log(allAnimals);
  } else {
    localStorage.getItem("savedAnimalList");
  }
  localStorage.setItem("savedAnimalList", JSON.stringify(allAnimals));
};

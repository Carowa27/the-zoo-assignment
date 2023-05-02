import axios from "axios";
import { IAnimal } from "../models/IAnimal";

// export const getAnimals = async (): Promise<IAnimal[]> => {
//   let response = await axios.get<IAnimal[]>(
//     `https://animals.azurewebsites.net/api/animals`
//   );
//   console.log(response.data);
//   return response.data;
// };
export const fetchAnimals = async () => {
  const response = await fetch("https://animals.azurewebsites.net/api/animals");
  const jsonData = await response.json();
  console.log(jsonData);
  // setAnimalList(json);
  // localStorage.setItem("savedAnimalList", JSON.stringify(animalList));
  return jsonData;
};

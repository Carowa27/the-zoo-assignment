import { IAnimal } from "../models/IAnimal";

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

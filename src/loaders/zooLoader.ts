import { useEffect, useState } from "react";
import { IAnimal } from "../models/IAnimal";

let allAnimals: IAnimal[];

const lsList = localStorage.getItem("savedAnimalList");
if (lsList != null) {
  allAnimals = JSON.parse(lsList);
}
export interface Loader {
  animals: IAnimal[];
}

export const zooLoader = () => {
  const data: Loader = { animals: allAnimals };

  return data;
};

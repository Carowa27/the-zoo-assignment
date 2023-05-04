import { IAnimal } from "../models/IAnimal";

export const updateAnimals = () => {
  let animals: IAnimal[] = JSON.parse(
    localStorage.getItem("savedAnimalList") || "[]"
  );
  if (animals.length === 0 || null) {
    console.error("your list is empty or does not exist");
  } else {
    for (let i = 0; i < animals.length; i++) {
      const aniFeed = animals[i].lastFed;
      const today = new Date();
      const hour = today.getHours;
      console.log(aniFeed);
    }
  }

  //om tid = gått mer än 3 tim
  //isFed = false
  //ram = orange

  //om tid = gått mer än 4 tim
  //ram röd
};

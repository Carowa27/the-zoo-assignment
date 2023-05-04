import { Navbar } from "../components/Navbar";
import { AnimalCard } from "../components/AnimalCard/AnimalCard";
import { Link, useLoaderData } from "react-router-dom";
import { Loader } from "../loaders/zooLoader";
import "./animals.scss";
import { useEffect, useState } from "react";
import { getAnimals } from "../services/animalService";
import { IAnimal } from "../models/IAnimal";

export const Animals = () => {
  const [allAnimals, setAllAnimals] = useState<IAnimal[]>(
    JSON.parse(localStorage.getItem("savedAnimalList") || JSON.stringify([]))
  );

  useEffect(() => {
    console.log("start");
    if (allAnimals.length === 0) {
      getAnimals().then((animals) => setAllAnimals(animals));
    }
    // updateAnimals();
  }, []);
  // const { animals } = useLoaderData() as Loader;
  // console.log(animals);

  return (
    <>
      <Navbar></Navbar>

      <h1>all animals</h1>
      <section className="animal">
        {allAnimals.map((animal, index) => (
          <Link key={index} to={animal.id.toString()}>
            <AnimalCard {...animal}></AnimalCard>
          </Link>
        ))}
      </section>
    </>
  );
};

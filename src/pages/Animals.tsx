import { Navbar } from "../components/Navbar";
import { AnimalCard } from "../components/AnimalCard/AnimalCard";
import { Link, useLoaderData } from "react-router-dom";
import { Loader } from "../loaders/zooLoader";
import "./animals.scss";
export const Animals = () => {
  const { animals } = useLoaderData() as Loader;
  console.log(animals);

  return (
    <>
      <Navbar></Navbar>

      <h1>all animals</h1>
      <section className="animal">
        {animals.map((animal, index) => (
          <Link key={index} to={animal.id.toString()}>
            <AnimalCard {...animal}></AnimalCard>
          </Link>
        ))}
      </section>
    </>
  );
};

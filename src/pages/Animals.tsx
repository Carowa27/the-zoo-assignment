import { Navbar } from "../components/Navbar";
import { AnimalCard } from "../components/AnimalCard/AnimalCard";

export const Animals = () => {
  return (
    <>
      <Navbar></Navbar>

      <h1>all animals</h1>
      <AnimalCard></AnimalCard>
    </>
  );
};

import { useLoaderData, useParams } from "react-router";
import { Navbar } from "../components/Navbar";
import { Loader } from "../loaders/zooLoader";
import { Animal } from "../components/Animal/Animal";

export const AnimalInfo = () => {
  const params = useParams();
  const { animals } = useLoaderData() as Loader;
  const paramsToNum = Number(params.id);

  const clickedAnimal = animals.find((animal) => animal.id === paramsToNum);
  console.log(params);
  if (clickedAnimal === undefined) {
    return (
      <>
        <h2>Something went wrong, try again or choose another animal</h2>
      </>
    );
  } else {
    return (
      <>
        <Navbar></Navbar>

        <Animal {...clickedAnimal}></Animal>
      </>
    );
  }
};

import { useEffect, useState } from "react";
import "./animalCard.scss";
import { IAnimal } from "../../models/IAnimal";
import { AnimalInfo } from "../../pages/AnimalInfo";
import { Link } from "react-router-dom";

export const AnimalCard = () => {
  const [animalList, setAnimalList] = useState<IAnimal[]>(
    JSON.parse(localStorage.getItem("savedAnimalList") || JSON.stringify([]))
  );
  useEffect(() => {
    if (animalList.length! === 0) {
      fetch("https://animals.azurewebsites.net/api/animals")
        .then((res) => res.json())
        .then(setAnimalList)
        .catch(console.error);
      console.log(animalList);
    } else {
      localStorage.getItem("savedAnimalList");
    }
  }, []);
  localStorage.setItem("savedAnimalList", JSON.stringify(animalList));

  const showAnimal = (id: number) => {
    console.log("ska öppna djur med id: ", id);
    const linkToClickedAnimal = "/animals/" + id;
    console.log(linkToClickedAnimal);
    return;
  };

  console.log(animalList);
  let animals;

  if (animalList != undefined) {
    animals = animalList.map((animal) => (
      <article
        className="animal__wrapper starved"
        key={animal.id}
        onClick={() => showAnimal(animal.id)}
      >
        <h2 className="animal__name">{animal.name}</h2>
        <div className="animal__wrapper--img">
          <img
            className="animal__img"
            src={animal.imageUrl}
            alt={animal.name}
          />
        </div>
        <div className="animal__wrapper--text">
          <i className="animal__name--latin">{animal.latinName}</i>
          <p className="animal__description--short">
            {animal.shortDescription}
          </p>
        </div>
      </article>
    ));
    return (
      <>
        <section className="animal">{animals}</section>
      </>
    );
  }
};

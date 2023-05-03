import { IAnimal } from "../../models/IAnimal";
import "./animalCard.scss";

export const AnimalCard = ({
  id,
  name,
  latinName,
  yearOfBirth,
  shortDescription,
  longDescription,
  imageUrl,
  medicine,
  isFed,
  lastFed,
}: IAnimal) => {
  return (
    <>
      <article className="animal__wrapper starved" key={id}>
        <h2 className="animal__name">{name}</h2>
        <div className="animal__wrapper--img">
          <img className="animal__img" src={imageUrl} alt={name} />
        </div>
        <div className="animal__wrapper--text">
          <i className="animal__name--latin">{latinName}</i>
          <p className="animal__description--short">{shortDescription}</p>
        </div>
        <p className="animal__last-fed">Last fed: {lastFed}</p>
      </article>
    </>
  );
};

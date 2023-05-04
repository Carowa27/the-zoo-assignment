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
      <article
        className={
          isFed ? "animals__wrapper satisfied" : "animals__wrapper hungry"
        }
        key={id}
      >
        <h3 className="animals__name">{name}</h3>
        <div className="animals__wrapper--img">
          <img
            className="animals__img"
            src={imageUrl}
            alt={name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://t4.ftcdn.net/jpg/05/94/68/07/240_F_594680748_F9srFUMY60jMngUcePzOcMftUOgMaxbB.jpg";
            }}
          />
        </div>
        <p className="animals__description--short">{shortDescription}</p>
      </article>
    </>
  );
};

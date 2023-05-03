import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import "./animal.scss";

export const Animal = ({
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
      <section className="animal">
        <article className="animal__wrapper starved" key={id}>
          <h2 className="animal__name">{name}</h2>
          <div className="animal__wrapper--img">
            <img className="animal__img" src={imageUrl} alt={name} />
          </div>
          <div className="animal__wrapper--text">
            <i className="animal__name--latin">{latinName}</i>
            <p className="animal__description--long">{longDescription}</p>
          </div>
          <p className="animal__last-fed">Last fed: {lastFed}</p>
        </article>
      </section>
    </>
  );
};

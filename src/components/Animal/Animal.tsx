import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import "./animal.scss";
import { FeedBtn } from "../FeedBtn/FeedBtn";

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
      <section className="animal-holder">
        <article className="animal__wrapper starved" key={id}>
          <h2 className="animal__name">{name}</h2>
          <div className="animal__wrapper--img">
            <img
              className="animal__img"
              src={imageUrl}
              alt={name}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://t4.ftcdn.net/jpg/05/94/68/07/240_F_594680748_F9srFUMY60jMngUcePzOcMftUOgMaxbB.jpg";
              }}
            />
          </div>
          <p className="animal__wrapper--info-text">
            <span>
              <b>Medicine:</b> {medicine}
            </span>
            <span>
              <b>Latin:</b> {latinName}
            </span>
          </p>
          <div className="animal__wrapper--text">
            <p>{longDescription}</p>
          </div>
          <div className="animal__wrapper--feed-section">
            <p className="animal__last-fed">{lastFed}</p>
            <FeedBtn></FeedBtn>
          </div>
        </article>
      </section>
    </>
  );
};

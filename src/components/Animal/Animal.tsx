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
  const [allAnimals, setAllAnimals] = useState<IAnimal[]>(
    JSON.parse(localStorage.getItem("savedAnimalList") || JSON.stringify([]))
  );
  const feedAnimal = (id: number) => {
    //ta in lista?
    let newAnimalList = [...allAnimals];
    console.log(newAnimalList);
    for (let i = 0; i < newAnimalList.length; i++) {
      //hitta klickat djur
      if (newAnimalList[i].id === id) {
        console.log("here I am");
        console.log(newAnimalList[i]);
        if (newAnimalList[i].isFed === true) {
          //om isFed är true, kan ej matas o updatera tid
          console.log("Already fed");
        } else {
          //isFed till true
          // if isFed === true src="https://t3.ftcdn.net/jpg/05/79/76/38/240_F_579763809_uA12B04c528MmOE9eeVRQABvUOZz9Sei.png"
          //uppdatera tid
          newAnimalList[i].isFed = true;
          console.log("update time");
          setAllAnimals(newAnimalList);
          console.log(allAnimals);
          console.log(newAnimalList[i].isFed);
        }
      }
    }
    localStorage.setItem("savedAnimalList", JSON.stringify(allAnimals));
  };
  return (
    <>
      <section className="animal-holder">
        <article className="animal__wrapper" key={id}>
          <h2 className="animal__name">{name}</h2>
          <div className="animal__wrapper--img">
            <img
              className="animal__img starved"
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
            {/* <FeedBtn></FeedBtn> */}
            <div
              onClick={(e) => {
                feedAnimal(id);
              }}
              className="feed__wrapper"
            >
              {allAnimals[id - 1].isFed ? (
                <img
                  className="feed__image"
                  src="https://t3.ftcdn.net/jpg/05/79/76/38/240_F_579763809_uA12B04c528MmOE9eeVRQABvUOZz9Sei.png"
                  alt="animal food"
                />
              ) : (
                <img
                  className="feed__image"
                  src="https://t3.ftcdn.net/jpg/05/79/76/36/240_F_579763672_vXr1bFW7WPsjx5sTDlatlz8kYSALS4le.png"
                  alt="animal food"
                />
              )}
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

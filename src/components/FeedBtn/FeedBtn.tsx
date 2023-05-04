import { IAnimal } from "../../models/IAnimal";
import "./feedBtn.scss";

export const FeedBtn = () => {
  const feedAnimal = (e: MouseEvent) => {
    console.log(e);
    console.log("clicked");
    //ta in lista?
    //hitta klickat djur
    //om isFed är true, kan ej matas o updatera tid
    //isFed till true
    // if isFed === true src="https://t3.ftcdn.net/jpg/05/79/76/38/240_F_579763809_uA12B04c528MmOE9eeVRQABvUOZz9Sei.png"
    //uppdatera tid
  };
  return (
    <>
      <div
        onClick={(e) => {
          feedAnimal(e);
        }}
        className="feed__wrapper"
      >
        <img
          className="feed__image"
          src="https://t3.ftcdn.net/jpg/05/79/76/36/240_F_579763672_vXr1bFW7WPsjx5sTDlatlz8kYSALS4le.png"
          alt="animal food"
        />
      </div>
    </>
  );
};

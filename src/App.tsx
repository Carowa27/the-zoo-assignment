import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { IAnimal } from './models/IAnimal';
// import { fetchAnimals } from './services/animalService';

function App() {
  const [animalList, setAnimalList] = useState<IAnimal[]>(JSON.parse(localStorage.getItem("savedAnimalList")||JSON.stringify([])));

  useEffect(()=>{
    fetch("https://animals.azurewebsites.net/api/animals")
    .then(res=>res.json())
    .then(setAnimalList)
    .catch(console.error)
    console.log(animalList)

if(animalList.length!>1){
  //   const fetchData = async ()=>{
  //   const data = await fetch("https://animals.azurewebsites.net/api/animals");
  //   const json = await data.json();
  //   console.log(json)
  //   setAnimalList(json)
    localStorage.setItem("savedAnimalList",JSON.stringify(animalList))
    console.log(animalList)
  }else{localStorage.getItem("savedAnimalList")}
  // } 
  // let get = fetchAnimals()
  // .catch(console.error)
  
  },[])


  let animals;
  
  if (animalList!=undefined){
    animals = animalList.map((animal)=>(
    <article className='animal__wrapper' key={animal.id}>
    <h2 className='animal__name'>{animal.name}</h2>
    <img className='animal__img' src={animal.imageUrl} alt={animal.name} />
    <i className='animal__name--latin'>{animal.latinName}</i>
    <p className='animal__description--short'>{animal.shortDescription}</p></article>
  ))}

  return (     
    <section>{animals}</section>
        
  )
}

export default App

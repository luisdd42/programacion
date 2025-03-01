import { useEffect, useState } from "react";

export const Button = ({ count }) => {
  const [personajes, setpersonajes] = useState([]);

  const obtenerPersonajes = async () => {
    let response = await fetch(
      "https://rickandmortyapi.com/api/character/?name=" + count
    );
    let data = await response.json();
    setpersonajes(data.results);
  };

  useEffect(() => {
    obtenerPersonajes();
  }, [count]);

  console.log(personajes);

  return (
    <>
      {personajes.map((element, index) => {
        return (
          <div key={index}>
            <h3>{element.name}</h3>
            <img src={element.image} alt="" />
          </div>
        );
      })}
    </>
  );
};

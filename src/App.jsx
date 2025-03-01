import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Filtro } from "./componente/Filtro";
import { Button } from "./componente/Button";

function App() {
  const [count, setCount] = useState("");
  console.log(count);

  return (
    <>
      <Filtro guardar={setCount} />
      <Button count={count} />
    </>
  );
}

export default App;

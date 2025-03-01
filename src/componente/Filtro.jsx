import { useRef } from "react";

export const Filtro = ({ guardar }) => {
  const inputref = useRef();
  return (
    <>
      <input ref={inputref} type="text" />

      <button
        onClick={() => {
          guardar(inputref.current.value);
        }}
      >
        Buscar
      </button>
    </>
  );
};

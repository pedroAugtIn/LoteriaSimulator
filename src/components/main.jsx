import React, { useState, useEffect } from "react";

export default function Main() {
  const [selectedButton, setSelectedButton] = useState(6);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [sorteados, setSorteados] = useState([]);
  const [tentativas, setTentativas] = useState(0);
  const [exibirPopup, setExibirPopup] = useState(false);

  const handleQuantityButtonClick = (number) => {
    setSelectedButton(number);
    setSelectedNumbers([]);
    setTentativas(0);
    setExibirPopup(false);
  };

  const handleNumberButtonClick = (number) => {
    setSelectedNumbers((prevSelectedNumbers) => {
      if (prevSelectedNumbers.includes(number)) {
        return prevSelectedNumbers.filter((n) => n !== number);
      } else {
        if (prevSelectedNumbers.length < selectedButton) {
          return [...prevSelectedNumbers, number];
        } else {
          return prevSelectedNumbers;
        }
      }
    });
  };

  const numberButtons = Array.from({ length: 60 }, (_, i) => i + 1);

  const iniciarSorteio = () => {
    const numerosSorteados = new Set();
    while (numerosSorteados.size < 6) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
      numerosSorteados.add(numeroAleatorio);
    }
    const numerosSorteadosArray = Array.from(numerosSorteados);
    setSorteados(numerosSorteadosArray);
    setTentativas((prevTentativas) => prevTentativas + 1);

    const todosSelecionados = numerosSorteadosArray.every((numero) =>
      selectedNumbers.includes(numero)
    );
    if (todosSelecionados) {
      setExibirPopup(true);
    }
  };

  useEffect(() => {
    setTentativas(0);
  }, [selectedNumbers]);

  const reiniciarJogo = () => {
    setSelectedButton(6);
    setSelectedNumbers([]);
    setSorteados([]);
    setTentativas(0);
    setExibirPopup(false);
  };

  return (
    <div className="flex items-center justify-center lg:max-w-[1000px]">
      <div className="h-auto w-full bg-white flex flex-col justify-center p-5">
        <div className="w-auto h-auto flex flex-col items-center gap-6">
          <div className="flex justify-center text-center">
            <h1 className="font-bold">Escolha a quantidade de números que deseja jogar:</h1>
          </div>
          <div className="flex flex-wrap col-auto mx-4 md:mx-20">
            {[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
              (number) => (
                <button
                  key={number}
                  className={`border-2 rounded-full py-1 px-3 m-2 ${
                    selectedButton === number
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                  name="quantidade"
                  onClick={() => handleQuantityButtonClick(number)}
                >
                  {number}
                </button>
              )
            )}
          </div>

          <div className="flex justify-center flex-col items-center my-2">
            <h1 className="font-bold"> Números Selecionados:</h1>

            <div className="flex flex-wrap col-auto mx-0 md:mx-20 justify-center items-center">
              {Array.from({ length: selectedButton }, (_, index) => {
                const number = selectedNumbers[index];
                const isSelectedAndSorteado = sorteados.includes(number);
                return (
                  <span
                    key={index}
                    className={`border-2 rounded-full py-1 px-3 m-2 ${
                      isSelectedAndSorteado ? "bg-green-500 text-white" : ""
                    }`}
                  >
                    {number || ""}
                  </span>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center my-2">
              <h1 className="font-bold">Lista de Números:</h1>
            </div>
            <div className="flex flex-wrap justify-center">
              {numberButtons.map((number) => (
                <button
                  key={number}
                  className={`border-2 rounded-full py-1 px-3 m-2 ${
                    selectedNumbers.includes(number)
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => handleNumberButtonClick(number)}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center flex-col">
              <div className="py-4">
                <button
                  onClick={iniciarSorteio}
                  disabled={selectedNumbers.length !== selectedButton}
                  className={`py-2 px-4 rounded-lg font-bold transition-transform duration-200 ${
                    selectedNumbers.length !== selectedButton ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-green-500 text-white hover:scale-110'
                  }`}
                >
                  Iniciar Sorteio
                </button>
              </div>
              <div className="my-2">
                <h1 className="font-bold">Números sorteados:</h1>
              </div>
              <div
                id="sorteados"
                className="flex flex-wrap justify-center items-center"
              >
                {sorteados.map((numero, index) => (
                  <span
                    key={index}
                    className={`border-2 rounded-full py-1 px-3 m-2 ${
                      selectedNumbers.includes(numero)
                        ? "bg-green-500 text-white"
                        : ""
                    }`}
                  >
                    {numero}
                  </span>
                ))}
              </div>
              <div className="my-2">
                <p className="font-bold">Sorteio {tentativas}</p>
              </div>
            </div>
          </div>

        </div>
        {exibirPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg flex flex-col items-center justify-center gap-10">
              <h2 className="text-4xl">Parabéns! Você venceu!</h2>
              <p>Número de tentativas: {tentativas}</p>
              <button
                className="border-2 py-2 px-4 hover:scale-110 "
                onClick={reiniciarJogo}
              >
                Jogar Novamente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

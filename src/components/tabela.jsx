export default function Tabela({ onButtonClick }) {
    return (
      <div className="flex items-center justify-center">
        <div className="h-auto w-auto bg-white flex flex-col justify-center">
          <div className="flex">
          <img src="./probabilidade2.png" alt="Probabilidade"/>
          </div>
          <div className="flex items-center justify-center my-10">
            <button onClick={onButtonClick} className="text-2xl border-2 py-2 px-4 rounded-full font-bold hover:scale-110 bg-green-600 text-white">Jogar!</button>
          </div>
        </div>
      </div>
    );
  }
  
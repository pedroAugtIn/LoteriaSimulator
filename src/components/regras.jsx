export default function Regras({ onButtonClick }) {
  return (
    <div className="flex items-center justify-center">
      <div className="h-auto w-auto bg-white flex flex-col justify-center p-4">
        <div className="flex h-full flex-col gap-5 py-4">
          <div>
            <div className="flex justify-center py-3">
              <h1 className="text-2xl font-bold">Como jogar</h1>
            </div>
            <p className="px-5 mt-3 text-gray-500">
              A Mega-Sena paga milhões para o acertador dos 6 números sorteados.
              Ainda é possível ganhar prêmios ao acertar 4 ou 5 números dentre
              os 60 disponíveis no volante de a​postas. Para realizar o sonho de
              ser milionário, você deve marcar de 6 a 20 números do volante,
              pode​ndo deixar que o sistema escolha os números para você.
            </p>
          </div>
          <div>
            <div className="flex justify-center  py-3">
              <h1 className="text-2xl font-bold">Premiação</h1>
            </div>
            <p  className="px-5 mt-3 text-gray-500">
              O prêmio bruto corresponde a 43,35% da arrecadação.<br/> Dessa
              porcentagem:<br/>• 35% são distribuídos entre os acertadores dos 6
              números sorteados (Sena);<br/>• 19% entre os acertadores de 5 números
              (Quina);<br/>• 19% entre os acertadores de 4 números (Quadra);<br/>• 22%
              ficam acumulados e são distribuídos aos acertadores dos 6 números
              nos concursos de final 0 ou 5.<br/>• 5% ficam acumulados para a
              primeira faixa - sena - do último concurso do ano de final 0 ou 5
              (Mega da Virada).
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center my-10">
          <button onClick={onButtonClick} className="border-2 py-2 px-4 rounded-full font-bold hover:scale-110 bg-green-600 text-white">Valores e Probabilidades</button>
        </div>
      </div>
    </div>
  );
}

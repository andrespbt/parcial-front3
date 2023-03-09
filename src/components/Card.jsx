export const Card = ({ name, color }) => {
  return (
    <div className="mt-8 border-2 border-black p-8 rounded-md">
      <h2 className="mb-2 font-bold">Hola {name}!</h2>

      <div>
        <h3 className="mb-2 font-bold">Sabemos que tu color favorito es:</h3>
        <div className={`bg-[${color}] h-16 w-full text-white text-center table`}>
          <span className="table-cell align-middle">{color}</span>
        </div>
      </div>
    </div>
  );
};

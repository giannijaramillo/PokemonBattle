const Screen = ({ pokemones, position }) => {
  return (
    <>
      <div className="w-[42rem] h-96 overflow-y-auto border-8 border-black bg-gray-800">
        <div className="flex flex-wrap justify-center">
          {pokemones?.map((pokemon, index) => (
            <div key={index} 
            style={{ color: position == pokemon.id ? 'red' : 'white', borderColor: position == pokemon.id ? 'white' : '#0f0f0f', zIndex: position == pokemon.id ? 10 : 0, borderWidth: '4px', borderStyle: 'solid' }}
            className="flex flex-col" >
              <p>{pokemon.name}</p>
              <img
                src={pokemon?.sprites?.front_default}
                alt={pokemon.name}
                className="w-25 h-25"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Screen;
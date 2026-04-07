const Screen = ({pokemones}) => {
    return (
    <> 
        <div className="w-144 h-81 bg-gray-800 border-4 border-gray-600 ">
            {pokemones?.map((pokemon) => (
                <div key={pokemon.name} className="text-white">
                    {pokemon.name}
                </div>
            ))}
        </div>
    </>
    )
};

export default Screen;
import { backgroundClassMap, hoverClassMap } from "./theme";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCard } from "./fetchPokemon";
import LoadingCard from "./LoadingCard";
function addLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, "0");
}

const Card = ({ pokeid }) => {
  const results = useQuery(["details", pokeid], fetchCard);
  const pokemon = results.data;

  if (results.isLoading) {
    return <LoadingCard />;
  }

  const backdrop = new URL(
    `./assets/pokemontypes/${pokemon.types[0].type.name}.svg`,
    import.meta.url
  ).href;

  return (
    <div
      className={`  h-[370px] w-80 border-1 bg-darkBgCard border-sky-900  transition-all rounded-xl shadow-xl px-5  py-8 relative  ${
        hoverClassMap[pokemon.types[0].type.name]
      }  `}
    >
      <img
        className={`absolute z-0 w-5/6 opacity-10 mx-auto`}
        src={backdrop}
        alt=""
      />

      <img
        className=" h-48 mx-auto z-10 relative hover:scale-125 transition-all "
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
        alt=""
      />

      <h1 className="text-center  font-semibold mx-4 ">
        #{addLeadingZeros(pokemon.id, 3)}
      </h1>
      <h1 className="text-center text-2xl font-bold capitalize ">
        {pokemon.name}
      </h1>

      <div className="flex justify-center mx-auto gap-3 ">
        {pokemon.types.map((p) => {
          let typeColor = `${
            backgroundClassMap[p.type.name]
          } p-1 px-2 rounded-lg flex gap-2 capitalize mb-6`;
          const imgUrl = new URL(
            `./assets/pokemontypes/${p.type.name}.svg`,
            import.meta.url
          ).href;
          return (
            <div className={typeColor} key={p.type.name}>
              <img src={imgUrl} alt="logo type" />
              <p className="text-zinc-50 font-semibold">{p.type.name}</p>
            </div>
          );
        })}
      </div>
      <Link to={`/pokedex-app/details/${pokemon.id}`}>
        <div
          className={`text-white py-2 text-center w-full font-bold absolute bottom-0 left-0 cursor-pointer shadow-inner rounded-b-lg  hover:cursor-pointer bg-${pokemon.types[0].type.name}  `}
        >
          Details
        </div>
      </Link>
    </div>
  );
};

export default Card;

import { useEffect, useState } from "react";
import Card from "./Card";
import LoadingCard from "./LoadingCard";
import Results from "./Results";
import { backgroundClassMap } from "./theme";
import { fetchPokemon, fetchAll } from "./fetchPokemon";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import { useNavigate } from "react-router-dom";

const POKETYPES = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
];

const Main = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [typeUrl, setTypeurl] = useState("");
  const [pageUrl, setPageUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const typeCall = useQuery(["type", typeUrl], fetchPokemon);
  const callAPI = useQuery(["all", pageUrl], fetchAll);
  const pokemonType = typeCall?.data?.pokemon ?? [];
  const callRes = callAPI?.data ?? [];
  const queryClient = useQueryClient();

  useEffect(() => {
    if (callAPI.data) {
      queryClient.prefetchQuery(["all", callRes.next], fetchAll);
    }
  }, [callRes.next, queryClient]);

  if (callAPI.isLoading || typeCall.isLoading) {
    const loadImg = new URL(
      `assets/pokemontypes/logo-pokemon.svg`,
      import.meta.url
    ).href;

    return (
      <>
        <div className=" animate-pulse flex w-full justify-center items-center pt-48 opacity-70">
          <img src={loadImg} alt="load" className="w-48" />
        </div>
      </>
    );
  }

  return (
    <div className={` pt-10 min-h-screen pt-4 pb-10 `}>
      <div className="container mx-auto">
        <div className="flex justify-between items-start">
          <div className="flex w-2/5 overflow-x-scroll gap-3">
            {POKETYPES.map((poke, index) => (
              <div
                key={poke}
                className={`${backgroundClassMap[poke]} cursor-pointer mt-2 text-white p-1 px-2 rounded-lg flex gap-2 capitalize mb-6`}
                onClick={() => setTypeurl(index + 1)}
              >
                {poke}
              </div>
            ))}
          </div>
          <div className="w-1/4 ">
            <form onSubmit={() => navigate(`details/${search}`)}>
              <input
                type="text"
                className="
            items-end
            form-control
            block
            px-3
            py-2
            text-base
            font-normal
            text-gray-300
            border-r-8
            bg-darkBg bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            w-[300px]
            focus:text-white focus:bg-darkBg focus:border-sky-600 focus:outline-none
          "
                id="pokeSearch"
                placeholder="Enter Pokemon Name or Number"
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
        </div>
        {pokemonType.length == 0 && (
          <div className="page flex gap-4 justify-center mt-4">
            {callRes.previous && (
              <a
                onClick={(e) => setPageUrl(callRes.previous)}
                className="cursor-pointer text-white border-2 border-zinc-100 rounded-md px-2 hover:opacity-60 transition-all hover:scale-110"
              >
                Prev
              </a>
            )}
            <a
              onClick={(e) => setPageUrl(callRes.next)}
              className="cursor-pointer text-white border-2 border-zinc-100 rounded-md px-2 hover:opacity-60 transition-all hover:scale-110"
            >
              Next
            </a>
          </div>
        )}
        <Results
          key={"key"}
          pokemonType={pokemonType}
          pokemon={callRes.results}
        />
      </div>
    </div>
  );
};

export default function MainErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Main {...props} />
    </ErrorBoundary>
  );
}

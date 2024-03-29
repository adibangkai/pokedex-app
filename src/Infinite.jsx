import { useState } from "react";
import Results from "./Results";
import { backgroundClassMap } from "./theme";
import { fetchPokemon, fetchInfinite } from "./fetchPokemon";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
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

const Infinite = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [typeUrl, setTypeurl] = useState("");
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/";
  const typeCall = useQuery(["type", typeUrl], fetchPokemon);

  const callAPI = useInfiniteQuery(
    ["all"],
    ({ pageParam = initialUrl }) => fetchInfinite(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    }
  );
  console.log(callAPI);
  const pokemonType = typeCall?.data?.pokemon ?? [];
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

  console.log("res", callAPI.data);

  return (
    <div className={` pt-10  pt-4 pb-10 `}>
      <div className="container mx-auto">
        <div className="md:flex md:justify-between md:items-start grid place-items-center">
          <div className="flex w-3/4 md:w-2/5 overflow-x-scroll gap-3">
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
          <div className="md:w-1/4 w-full flex justify-center">
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
            md:w-[300px]
              w-full
            focus:text-white focus:bg-darkBg focus:border-sky-600 focus:outline-none
          "
                id="pokeSearch"
                placeholder="Enter Pokemon Name or Number"
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
        </div>

        {callAPI.data?.pages.map((page, index) => (
          <Results
            key={"key"}
            pokemonType={pokemonType}
            pokemon={page.results}
          />
        ))}
        <div className="page flex gap-4 justify-center mt-4">
          {callAPI.isFetching ? (
            <h1 className=" animate-pulse ">loading</h1>
          ) : (
            <button
              onClick={() => callAPI.fetchNextPage()}
              className="items-center py-5 rounded-xl"
            >
              click to load more...
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function InfiniteErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Infinite {...props} />
    </ErrorBoundary>
  );
}

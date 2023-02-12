import { useEffect, useState } from "react";
import { backgroundClassMap, textColorMap, gradientType } from "./theme";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchDetails from "./fetchDetails";
import fetchSpecies from "./fetchSpecies";
import ErrorBoundary from "./ErrorBoundary";

const JapaneseName = ({ url }) => {
  const species = useQuery(["species", url], fetchSpecies);

  if (species.isLoading) {
    return (
      <>
        <p
          className={`font-semibold pt-5 text-[160px] capitalize pl-20 text-zinc-200
          } opacity-60 whitespace-nowrap `}
        >
          ...
        </p>
      </>
    );
  }

  const speciesJapan = species.data.names[0].name;
  return (
    <>
      <p
        className={`font-semibold pt-5 text-[160px] capitalize pl-20 text-zinc-200
          } opacity-60 whitespace-nowrap `}
      >
        {speciesJapan}
      </p>
    </>
  );
};

const Details = () => {
  const { id } = useParams();
  const pokeid = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const results = useQuery(["details", pokeid], fetchDetails);

  function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, "0");
  }

  if (results.isLoading) {
    const loadImg = new URL(
      `./assets/pokemontypes/logo-pokemon.svg`,
      import.meta.url
    ).href;

    return (
      <div className=" animate-pulse flex w-full justify-center items-center pt-48 opacity-70">
        <img src={loadImg} alt="load" className="w-48" />
      </div>
    );
  }

  const pokemon = results.data;

  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );

  let page = range(parseInt(pokemon.id), parseInt(pokemon.id) + 10, 1);

  const imgUrl = new URL(
    `./assets/pokemontypes/${pokemon.types[0].type.name}.svg`,
    import.meta.url
  ).href;
  return (
    <div
      className={`transition duration-150 ease-in-out  mt-5 grid grid-cols-6 gap-1 min-h-screen max-h-full ${
        gradientType[pokemon.types[0].type.name]
      } `}
    >
      <div className=" pl-5">
        <p className="font-semibold text-2xl pt-4 pl-20">
          #{addLeadingZeros(pokemon.id, 3)}
        </p>
        <p className="font-semibold text-4xl pl-20 capitalize whitespace-nowrap">
          {pokemon.name}
        </p>
        <JapaneseName url={pokemon.species.url} />
        <div className="pl-20 mt-48">
          <p className="font-extralight text-2xl whitespace-nowrap">
            Weight: {(pokemon.weight * 10) / 100}kg
          </p>
          <p className="font-extralight text-2xl whitespace-nowrap">
            Height: {(pokemon.height * 10) / 100}m
          </p>
        </div>
      </div>
      <div className="col-span-3 flex ">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
          alt=""
          className="mx-auto h-4/6 "
        />

        <div className="grid">
          <div className="h-[280px]  bg-white mx-auto w-[2px]"></div>
          <img src={imgUrl} alt="logo type" className="w-9 " />
          <div className="h-[340px]  bg-white mx-auto w-[2px]"></div>
        </div>
      </div>
      <div className=" col-span-2 p-8">
        <div className="flex text-xl absolute top-14 font-mono right-10">
          <ul className="flex gap-2 mx-auto overflow">
            <Link to={`/details/${pokemon.id - 1}`}>
              <li className="hover:font-semibold">{"<"}</li>
            </Link>
            {page.map((p, i) => {
              if (p - 5 > 0) {
                let pageClass =
                  pokemon.id === p - 5
                    ? "font-bold opacity-40 "
                    : "font-light hover:opacity-20";

                return (
                  <Link key={i} to={`/details/${p - 5}`}>
                    <li className={pageClass}>{p - 5}</li>
                  </Link>
                );
              }
            })}
            <Link to={`/details/${pokemon.id + 1}`}>
              <li className="font-serif">{">"}</li>
            </Link>{" "}
          </ul>
        </div>
        <div className="flex gap-2 mt-32">
          {pokemon.types.map((p, i) => {
            let typeColor = `${
              backgroundClassMap[p.type.name]
            } p-1 px-2 border-2 rounded-full flex gap-2 capitalize mb-6 w-12 h-12  cursor-pointer`;
            const imgUrlType = new URL(
              `./assets/pokemontypes/${p.type.name}.svg`,
              import.meta.url
            ).href;
            return (
              <div className={typeColor} key={i}>
                <img src={imgUrlType} alt={p.type.name} />
              </div>
            );
          })}
        </div>
        <h2 className="font-thin text-4xl ">Stats</h2>

        {pokemon.stats.map((stat, i) => {
          let barColor = " animate-pulse bg-green-700 h-2.5 rounded-full";
          if (stat.base_stat < 40) {
            barColor = " bg-red-600 h-2.5 rounded-full";
          } else if (stat.base_stat < 70) {
            barColor = " bg-orange-500 h-2.5 rounded-full";
          } else if (stat.base_stat < 90) {
            barColor = " bg-amber-400 h-2.5 rounded-full";
          } else if (stat.base_stat < 120) {
            barColor = " bg-yellow-300 h-2.5 rounded-full";
          } else if (stat.base_stat < 170) {
            barColor = " bg-lime-500 h-2.5 rounded-full";
          }
          return (
            <div className="flex gap-2" key={i}>
              <div className=" font-thin capitalize whitespace-nowrap w-3/6">
                {stat.stat.name}
              </div>
              <div className=" font-bold w-1/6">{stat.base_stat}</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2.5 ">
                <div
                  className={barColor}
                  style={{ width: `${(stat.base_stat * 100) / 200}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

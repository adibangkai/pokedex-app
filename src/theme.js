const backgroundClassMap = {
  bug: "bg-bug",
  dark: "bg-dark",
  dragon: "bg-dragon",
  electric: "bg-electric",
  fairy: "bg-fairy",
  fighting: "bg-fighting",
  fire: "bg-fire",
  flying: "bg-flying",
  ghost: "bg-ghost",
  grass: "bg-grass",
  ground: "bg-ground",
  ice: "bg-ice",
  normal: "bg-normal",
  poison: "bg-poison",
  psychic: "bg-psychic",
  rock: "bg-rock",
  steel: "bg-steel",
  water: "bg-water",
};

const textColorMap = {
  bug: "text-bug",
  dark: "text-dark",
  dragon: "text-dragon",
  electric: "text-electric",
  fairy: "text-fairy",
  fighting: "text-fighting",
  fire: "text-fire",
  flying: "text-flying",
  ghost: "text-ghost",
  grass: "text-grass",
  ground: "text-ground",
  ice: "text-ice",
  normal: "text-normal",
  poison: "text-poison",
  psychic: "text-psychic",
  rock: "text-rock",
  steel: "text-steel",
  water: "text-water",
};

const hoverClassMap = {
  bug: "hover:bg-lime-700",
  dark: "hover:bg-sky-800",
  dragon: "hover:bg-blue  -900",
  electric: "hover:bg-amber-500",
  fairy: "hover:bg-fuchsia-600",
  fighting: "hover:bg-rose-800",
  fire: "hover:bg-amber-700",
  flying: "hover:bg-cyan-800",
  ghost: "hover:bg-stone-700",
  grass: "hover:bg-lime-800",
  ground: "hover:bg-orange-700",
  ice: "hover:bg-sky-600",
  normal: "hover:bg-slate-600",
  poison: "hover:bg-pink-700",
  psychic: "hover:bg-cyan-700",
  rock: "hover:bg-zinc-600",
  steel: "hover:bg-stone-700",
  water: "hover:bg-sky-700",
};

const gradientType = {
  bug: "bg-gradient-to-b from-darkBg   via-lime-500  to-lime-300",
  dark: "bg-gradient-to-b from-darkBg  via-violet-900  to-purple-700",
  dragon: "bg-gradient-to-b from-darkBg  via-cyan-600  to-blue-500",
  electric: "bg-gradient-to-b from-darkBg  via-amber-400  to-yellow-300",
  fairy: "bg-gradient-to-b from-darkBg  to-fuchsia-600",
  fighting: "bg-gradient-to-b from-darkBg  via-rose-600  to-rose-800",
  fire: "bg-gradient-to-b from-darkBg  via-amber-500  to-amber-300",
  flying: "bg-gradient-to-b from-darkBg  via-teal-500  to-cyan-300",
  ghost: "bg-gradient-to-b from-darkBg  via-purple-900  to-stone-600",
  grass: "bg-gradient-to-b from-darkBg  via-lime-500 to-lime-300 ",
  ground: "bg-gradient-to-b from-darkBg  via-amber-500  to-orange-400",
  ice: "bg-gradient-to-b from-darkBg  via-sky-500  to-cyan-300",
  normal: "bg-gradient-to-b from-darkBg to-sky-600",
  poison: "bg-gradient-to-b from-darkBg  via-purple-900  to-pink-600",
  psychic: "bg-gradient-to-b from-darkBg to-cyan-500",
  rock: "bg-gradient-to-b from-darkBg to-zinc-200",
  steel: "bg-gradient-to-b from-darkBg  via-blue-900  to-stone-400",
  water: "bg-gradient-to-b from-darkBg  via-sky-500  to-sky-300",
};

export { backgroundClassMap, hoverClassMap, textColorMap, gradientType };
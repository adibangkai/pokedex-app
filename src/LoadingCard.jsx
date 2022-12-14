const imgUrl = new URL(
  `assets/pokemontypes/divider-pokeball.svg`,
  import.meta.url
).href;

const LoadingCard = () => {
  return (
    <div
      className={`animate-pulse h-[400px] card border-1 bg-darkBgCard border-sky-900  transition-all rounded-xl shadow-xl px-5  py-8 relative hover:cursor-pointer  `}
    >
      <img src={imgUrl} alt="" className="h-48 w-48 mx-auto mt-10" />
    </div>
  );
};

export default LoadingCard;

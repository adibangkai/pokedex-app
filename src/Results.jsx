import ErrorBoundary from "./ErrorBoundary";
import Card from "./Card";

const Results = ({ pokemonType, pokemon, key }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4 text-white">
      {pokemonType.length == 0 &&
        pokemon.map((poke, i) => {
          return <Card key={i} pokeid={poke.url} />;
        })}
      {pokemonType.map((poke, i) => {
        return <Card key={i} pokeid={poke.pokemon.url} />;
      })}
    </div>
  );
};

export default function ResultsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Results {...props} />
    </ErrorBoundary>
  );
}

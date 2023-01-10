const fetchPokemon = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`https://pokeapi.co/api/v2/type/${id}`);

  if (!apiRes.ok) {
    throw new Error(`type/${id} fetch not ok`);
  }

  return apiRes.json();
};

export const fetchInfinite = async (url) => {
  const apiRes = await fetch(url);

  if (!apiRes.ok) {
    throw new Error(`error!`);
  }

  return apiRes.json();
};
const fetchAll = async ({ queryKey }) => {
  const url = queryKey[1];
  const apiRes = await fetch(url);

  if (!apiRes.ok) {
    throw new Error(`type/${id} fetch not ok`);
  }

  return apiRes.json();
};

const fetchCard = async ({ queryKey }) => {
  const url = queryKey[1];

  const apiRes = await fetch(url);

  if (!apiRes.ok) {
    throw new Error(`type/${id} fetch not ok`);
  }

  return apiRes.json();
};

export { fetchPokemon, fetchCard, fetchAll };

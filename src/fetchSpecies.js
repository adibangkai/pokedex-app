const fetchSpecies = async ({ queryKey }) => {
  const url = queryKey[1];
  const apiRes = await fetch(url);

  if (!apiRes.ok) {
    throw new Error(`species cannot be found`);
  }

  return apiRes.json();
};

export default fetchSpecies;

const fetchDetails = async ({ queryKey }) => {
  const url = queryKey[1];
  const apiRes = await fetch(url);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchDetails;

const getData = async () => {
  const res = await fetch(
    'https://learning.oreilly.com/api/v2/search/?formats=book',
  );

  const data = await res.json();

  return data;
};

module.exports = getData;

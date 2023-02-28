import wrapPromise from "./wrapPromise";

function fetchArticlesPromise(searchTerm) {
  return async () => {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=extracts|pageimages&inprop=url&utf8=&format=json&srlimit=20&srsearch=${searchTerm}&origin=*`
    );

    const result = await response.json();
    return result.query.search;
  };
}

const fetchArticlesResource = (searchTerm) =>
  wrapPromise(fetchArticlesPromise(searchTerm));

export default fetchArticlesResource;

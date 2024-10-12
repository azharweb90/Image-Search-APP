import axios from "axios";

const SearchImages = async (term) => {
  const response = await axios.get(`${import.meta.env.VITE_URL}search/photos`, {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
    },
    params: {
      query: term,
    },
  });

  console.log(response.data.results);

  return response.data.results;
};

export default SearchImages;

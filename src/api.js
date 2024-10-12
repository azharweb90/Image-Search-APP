import axios from "axios";

const SearchImages = async () => {
  const response = await axios.get(`${import.meta.env.VITE_URL}search/photos`, {
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_ACCESS_KEY}`,
    },
    params: {
      query: "cars",
    },
  });

  return response;
};

export default SearchImages;

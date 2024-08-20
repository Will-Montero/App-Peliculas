import {useState, useEffect} from 'react'

export const fetchSeries = () => {
    const URL = "https://api.themoviedb.org/3/tv/popular";
  const API_KEY = "9b99ed6f20e2bfc951d790cf5a420564";

  const [dataSeries, setDataSeries] = useState([]);

  const fetchSeries = async () => {
    try {
      const response = await fetch(
        `${URL}?api_key=${API_KEY}`
      );
      const data = await response.json();
      setDataSeries(data.results);
      console.log(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };
useEffect(() => {
    fetchSeries();
  }, []);
  return {
    dataSeries
  }
}

import {useState, useEffect} from 'react'

export const fetchSeries = () => {
    const URL = `${import.meta.env.VITE_API_URL}/tv/popular`;
  const API_KEY = `${import.meta.env.VITE_API_KEY}`;

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

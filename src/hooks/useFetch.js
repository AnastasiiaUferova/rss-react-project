import { useEffect, useState } from 'react';
import axios from 'axios';
export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [popupData, setPopupData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data.tv_shows);
        setPopupData(res.data.tvShow);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [url]);
  return { data, loading, error, popupData };
}

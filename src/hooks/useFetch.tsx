import { useEffect, useState } from 'react';
import axios from 'axios';

export interface TvShow {
  id: number;
  name: string;
  permalink?: string;
  start_date: string;
  end_date?: string | null;
  status: string;
  country: string;
  network: string;
  image_thumbnail_path: string;
}

interface ApiError {
  message: string;
  status: number;
}

export default function useFetch(url: string) {
  const [data, setData] = useState<TvShow[]>([]);
  const [popupData, setPopupData] = useState<TvShow[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setData(res.data.tv_shows);
        setPopupData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error, popupData };
}

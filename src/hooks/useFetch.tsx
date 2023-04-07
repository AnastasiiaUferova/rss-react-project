import { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiCardType, PopupData } from '../types/types';

interface ApiError {
  message: string;
  status: number;
}

export default function useFetch(url: string) {
  const [data, setData] = useState<ApiCardType[]>([]);
  const [popupData, setPopupData] = useState<PopupData>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

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

import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    SetLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        SetLoading(false);
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        // setData(null);
      });
  }, [url]);

  return { data, loading, error };
}

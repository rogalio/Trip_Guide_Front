import axios from "axios";

import { useEffect, useState } from "react";

export const useAxiosFetch = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "X-RapidAPI-Key":
              "fab384f000mshbf3bf66224e58e8p1e170djsn81db59e88085",
            "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
          },
        });

        setData(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, [url]);

  return { data, error, loaded };
};

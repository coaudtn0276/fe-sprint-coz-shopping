import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [maindata, setMaindate] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios(url).then((res) => {
      setMaindate(res.data);
      setIsLoading(false);
    });
  }, [url]);

  return [maindata, isLoading];
}

export default useFetch;

import { useState, useEffect } from "react";
import { useManualQuery } from "graphql-hooks";

const useMultiEndPoint = (context, query, serviceType) => {
  const { setCurrentClient } = context();
  const [flag, setFlag] = useState(true);
  const [fetchUser, { loading, error, data }] = useManualQuery(query);

  useEffect(() => {
    setFlag(false);
    setCurrentClient(serviceType);
  }, []);

  useEffect(() => {
    if (!flag) fetchUser();
  }, [flag]);

  return { loading, error, data };
};

export default useMultiEndPoint;

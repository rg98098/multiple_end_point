import React from "react";
import { allTitles } from "../../graphql_queries/starwars";

import TitleList from "../atoms/TitleList";
import useMultiEndPoint from "../../hooks/useMultiEndPoint";
import { useMainContext } from "../../MainApp";
import { ServiceType } from "../../constants";

const Starwars = () => {
  const { loading, error, data } = useMultiEndPoint(
    useMainContext,
    allTitles,
    ServiceType.STARWARS
  );

  return (
    <div>
      <h3>Starwars</h3>
      <TitleList loading={loading} error={error} data={data} />
    </div>
  );
};

export default Starwars;

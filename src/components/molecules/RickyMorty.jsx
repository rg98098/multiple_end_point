import React from "react";
import { ServiceType } from "../../constants";
import { getCharacter } from "../../graphql_queries/getCharacter";
import useMultiEndPoint from "../../hooks/useMultiEndPoint";
import { useMainContext } from "../../MainApp";
import Characters from "../atoms/Characters";

const RickyMorty = () => {
  const { loading, error, data } = useMultiEndPoint(
    useMainContext,
    getCharacter,
    ServiceType.RICKYMORTY
  );
  return (
    <div>
      <h3>Ricky And Morty</h3>
      <Characters loading={loading} error={error} data={data} />
    </div>
  );
};

export default RickyMorty;

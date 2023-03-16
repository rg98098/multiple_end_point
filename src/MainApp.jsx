import React, { createContext, useContext, useState } from "react";
import {
  POKEMON_ENDPOINT,
  RICKYMORTY_ENPOINT,
  STARWARS_ENDPOINT,
} from "./config";
import { ServiceType } from "./constants";
import { GraphQLClient, ClientContext } from "graphql-hooks";

const MainContextProvider = createContext({});

export const useMainContext = () => useContext(MainContextProvider);

export const MainContext = (props) => {
  const [userEntered, setClient] = useState(
    new GraphQLClient({ url: POKEMON_ENDPOINT })
  );

  const setCurrentClient = (type) => {
    let uri = "";
    switch (type) {
      case ServiceType.STARWARS:
        uri = STARWARS_ENDPOINT;
        break;
      case ServiceType.POKEMON:
        uri = POKEMON_ENDPOINT;
        break;
      case ServiceType.RICKYMORTY:
        uri = RICKYMORTY_ENPOINT;
        break;
      default:
        uri = POKEMON_ENDPOINT;
    }
    setClient(new GraphQLClient({ url: uri }));
  };

  return (
    <MainContextProvider.Provider value={{ setCurrentClient }}>
      <ClientContext.Provider value={userEntered}>
        {props.children}
      </ClientContext.Provider>
    </MainContextProvider.Provider>
  );
};

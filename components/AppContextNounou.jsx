import deepmerge from "deepmerge";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
const AppContextNounou = createContext();
const initialState = {
  sessionNounou: null,
};

export const useAppContextNounou = () => useContext(AppContextNounou);

const AppContextNounouProvider = (props) => {
  const [state, setState] = useState(initialState);
  const updateState = useCallback(
    (newState) =>
      setState((previousState) => deepmerge(previousState, newState)),
    []
  );
  const setSessionNounou = useCallback(
    (jwt) => {
      if (!jwt) {
        localStorage.removeItem("sessionNounou_jwt");
        updateState({ sessionNounou: null });

        return;
      }

      // const { session } = JSON.parse(atob(jwt.split(".")[1]));
      const { payload1: sessionNounou } = JSON.parse(
        Buffer.from(jwt.split(".")[1], "base64").toString("utf-8")
      );

      localStorage.setItem("sessionNounou_jwt", jwt);

      updateState({ sessionNounou });
    },
    [updateState]
  );

  useEffect(() => {
    setSessionNounou(localStorage.getItem("sessionNounou_jwt"));
  }, [setSessionNounou]);

  return (
    <AppContextNounou.Provider
      {...props}
      value={{
        setSessionNounou,
        state,
      }}
    />
  );
};
export default AppContextNounouProvider;

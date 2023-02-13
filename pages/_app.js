import "../styles/globals.css";
import { AppContextProvider } from "./components/AppContext";
import { AppContextNounouProvider } from "./components/AppContextNounou";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <AppContextNounouProvider>
        <Component {...pageProps} />
      </AppContextNounouProvider>
    </AppContextProvider>
  );
}

export default MyApp;

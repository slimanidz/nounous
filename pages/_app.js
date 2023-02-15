import AppContextProvider from "../components/AppContext";
import AppContextNounouProvider from "../components/AppContextNounou";
import "../styles/globals.css";

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

import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import axios from "axios";
axios.defaults.baseURL = "https://api.indexblock.fund/";

const appId = "fk8hHX5ftWfk1s24SGiQ89dK2FKRrd7tgWJQPLzB";
const serverUrl = "https://ogobtdmrqv5p.usemoralis.com:2053/server";
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;

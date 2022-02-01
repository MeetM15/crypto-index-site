import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import axios from "axios";
axios.defaults.baseURL = "https://indexblock.herokuapp.com/";

const appId = "5SXhZyK2CMouks2ACdoDGV0Nr6UqJteFOWJ4pr8y";
const serverUrl = "https://oijvmq4z5imv.usemoralis.com:2053/server";
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;

import { storeWrapper } from "../redux/store";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
};

export default storeWrapper.withRedux(MyApp);
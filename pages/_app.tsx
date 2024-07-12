import { ToastContainer } from 'react-toastify';
import type { AppProps } from 'next/app';
import Layout from '../layout';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import wrapper, { persistor } from '@/store';


export default function App({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
        <ToastContainer/>
      </PersistGate>
    </Provider>
  );
}

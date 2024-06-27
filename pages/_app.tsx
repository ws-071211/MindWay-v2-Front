import { Slide, ToastContainer } from 'react-toastify';
import type { AppProps } from 'next/app';
import Layout from '../layout';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import wrapper from '@/store';

export default function App({ Component, ...pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
      <ToastContainer/>
    </Provider>
  );
}

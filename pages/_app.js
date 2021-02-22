import '../styles/globals.css';
import Layout from '../components/Layout';
import {ChofferProvider} from '../contexts/ChofferProvider';

function MyApp({ Component, pageProps }) {
  
  // Error in build
  const Layout_ = Component.Layout || ((children) => <>{children}</>);
  //console.log(pageProps)
  return (
    <ChofferProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChofferProvider>
  )
  }

export default MyApp


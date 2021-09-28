import { AppProps } from 'next/app'
// import '../style.css' // global css
// components 
import Layout from '@components/Layout/Layout'


function MyApp({ Component, pageProps }: AppProps) {
  // aquí se pueden inyectar los context, providers o layout 
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  ) 
}
  
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
  
export default MyApp
import '@/styles/globals.css';
import Layout from '@/components/layout/Layout';
import { Roboto } from '@next/font/google';
 
// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export default function App({ Component, pageProps }) {
  return( 
    <main className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';

const App = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log('LOG: route change', url);
    };
    router?.events?.on('routeChangeComplete', handleRouteChange);
    return () => {
      router?.events?.off('routeChangeComplete', handleRouteChange);
    };
  }, [router?.events]);

  return (
    <>
      <ThemeProvider attribute='class' enableSystem={true}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;

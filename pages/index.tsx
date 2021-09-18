import ScreenSize from '@components/Debug/ScreenSize';
import Header from '@components/Layout/Header';
import Cover from '@components/Layout/Cover';
import Introduction from '@components/Layout/Introduction';
import Features from '@components/Layout/Features';
import Footer from '@components/Layout/Footer';

export default function Home() {
  return (
    <div>
      <ScreenSize />
      <Header />
      <Cover />
      <Introduction />
      <Features />
      <Footer />
    </div>
  );
}

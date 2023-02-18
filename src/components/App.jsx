import { Route, Routes } from 'react-router-dom';
import { Footer } from 'layout/Footer';
import { Header } from 'layout/Header';
import { About } from 'pages/About';
import { Contacts } from 'pages/Contacts';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Category } from 'pages/Category';

export const App = () => {
  return (
    <>
      <Header />
      <main className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

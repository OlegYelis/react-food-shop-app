import { getAllCategories } from 'api';
import { CategoryList } from 'components/CategoryList/CategoryList';
import { Preloader } from 'components/Preloader';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then(data => {
      setCatalog(data.categories);
    });
  }, []);
  return (
    <>{!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}</>
  );
};

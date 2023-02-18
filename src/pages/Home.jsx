import { getAllCategories } from 'api';
import { CategoryList } from 'components/CategoryList/CategoryList';
import { Preloader } from 'components/Preloader';
import { Search } from 'components/Search';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Home = () => {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories().then(data => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter(item =>
              item.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  const handleSearch = str => {
    setFilteredCatalog(
      catalog.filter(item =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate({
      pathname,
      search: `?search=${str}`,
    });
  };

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
};

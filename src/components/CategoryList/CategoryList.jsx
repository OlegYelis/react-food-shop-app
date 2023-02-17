import { CategoryItem } from './CategoryItem';

export const CategoryList = ({ catalog = [] }) => {
  return (
    <ul className="list">
      {catalog.map(el => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </ul>
  );
};

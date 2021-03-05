import { bookCategories } from "../container/BooksForm";

const CategoryFilter = () => (
  <select defaultValue="default">
    <option value="default">ALL</option>
    { bookCategories && bookCategories.map(cat => (
      <option value={cat} key={cat}>{cat}</option>
    ))}
    <option value="default">All</option>
  </select>
);

export default CategoryFilter;

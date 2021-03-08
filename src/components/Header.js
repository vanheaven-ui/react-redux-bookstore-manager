import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
import CategoryFilter from './CategoryFilter';

const Header = ({ handleChange }) => (
  <header>
    <nav className="navbar">
      <a id="logo" href="/">Bookstore CMS</a>
      <div className="nav-links">
        <a href="/books" className="books">BOOKS</a>
        <a href="/categories" className="categories">CATEGORIES</a>
        <CategoryFilter handleChange={handleChange} />
      </div>
    </nav>
    <div className="user">
      <FaUser />
    </div>
  </header>
);

Header.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Header;

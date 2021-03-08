import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
import CategoryFilter from './CategoryFilter';

const Header = ({ handleChange }) => (
  <header>
    <nav className="navbar">
      <a id="logo" href="/">Bookstore CMS</a>
      <div className="nav-links">
        <a href="/books" className="books">BOOKS</a>
        <button type="button" className="categories">CATEGORIES</button>
      </div>
    </nav>
    <CategoryFilter handleChange={handleChange} />
    <div className="user">
      <FaUser />
    </div>
  </header>
);

Header.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Header;

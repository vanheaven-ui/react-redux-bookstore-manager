import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Header = ({ clickHandler }) => (
  <header>
    <nav className="navbar">
      <a id="logo" href="/">Bookstore CMS</a>
      <div className="nav-links">
        <a href="/books" className="books">BOOKS</a>
        <button type="button" className="categories" onClick={clickHandler}>CATEGORIES</button>
      </div>
    </nav>
    <div className="user">
      <FaUser />
    </div>
  </header>
);

Header.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Header;

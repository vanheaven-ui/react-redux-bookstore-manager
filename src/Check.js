import PropType from 'prop-types';

const Check = ({ title }) => (
  <div>
    <h2>{title}</h2>
  </div>
);

Check.defaultProps = {
  title: '',
};

Check.propTypes = {
  title: PropType.string,
};

export default Check;

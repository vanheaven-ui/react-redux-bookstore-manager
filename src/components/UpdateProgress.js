import PropTypes from 'prop-types';

const UpdateProgress = ({ clickHandle }) => (
  <form>
    <input type="range" name="vol" className="slider" min="0" max="100" />
    <div className="actions">
      <button name="update" type="button" onClick={clickHandle}>Update</button>
      <button type="button" onClick={clickHandle}>Cancel</button>
    </div>
  </form>
);

UpdateProgress.propTypes = {
  clickHandle: PropTypes.func.isRequired,
};

export default UpdateProgress;

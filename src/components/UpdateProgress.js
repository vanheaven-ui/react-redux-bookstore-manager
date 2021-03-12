import PropTypes from 'prop-types';
import { useState } from 'react';

const UpdateProgress = ({
  updateProgress, toggle, progress, id,
}) => {
  console.log(typeof (progress));
  const [hideUpdateForm, setHideUpdateForm] = useState(true);
  const [value, setValue] = useState(progress);

  const clickHandle = () => {
    setHideUpdateForm(true);
    toggle(false);
    updateProgress(value, id);
  };

  const handleValueChange = e => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      { hideUpdateForm && (
      <form>
        <input
          type="range"
          name="vol"
          className="slider"
          min="0"
          max="100"
          value={value}
          onChange={e => handleValueChange(e)}
        />
        <div className="actions">
          <button name="update" type="button" onClick={clickHandle}>Update</button>
          <button type="button" onClick={clickHandle}>Cancel</button>
        </div>
      </form>
      ) }
    </>
  );
};

UpdateProgress.propTypes = {
  updateProgress: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default UpdateProgress;

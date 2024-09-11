import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsername } from '../slices/userSlice'; // Assurez-vous que le chemin est correct

const EditButton = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [isEditing, setIsEditing] = useState(false);
  const [buttonText, setButtonText] = useState('Edit Name');
  const [inputValue, setInputValue] = useState(user ? user.username : '');

  const handleEditClick = () => {
    if (isEditing) {
      console.log('Button clicked again!');
      console.log('Input value:', inputValue);
      dispatch(updateUsername(inputValue));
      setIsEditing(false);
      setButtonText('Edit Name');
    } else {
      setIsEditing(true);
      setButtonText('Save Name');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <button className="edit-button" onClick={handleEditClick}>
        {buttonText}
      </button>
      {isEditing && (
        <input
          type="text"
          className="edit-input"
          placeholder="Enter new name"
          value={inputValue}
          onChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default EditButton;

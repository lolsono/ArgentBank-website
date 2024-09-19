import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUsername } from '../slices/userSlice'; 
import { API_BASE_URL } from '../Pages/SignIn';

const EditButton = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  
   // Récupérer le token depuis le localStorage
   const token = localStorage.getItem('token');

  const [isEditing, setIsEditing] = useState(false);
  const [buttonText, setButtonText] = useState('Edit username');
  const [inputValue, setInputValue] = useState(user ? user.username : '');

  const handleEditClick = async () => {
    if (isEditing) {
      console.log('Button clicked again!');
      console.log('Input value:', inputValue);

      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/user/profile`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            userName: inputValue,
          }),
        });

        if (response.ok) {
          dispatch(updateUsername(inputValue));
          console.log('Username updated successfully');
          window.location.reload()
        } else {
          console.error('Failed to update username');
        }
      } catch (error) {
        console.error('Error updating username:', error);
      }

      setIsEditing(false);
      setButtonText('Edit userame');
    } else {
      setIsEditing(true);
      setButtonText('Save username');
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
          placeholder="Enter new username"
          value={inputValue}
          onChange={handleInputChange}
        />
      )}
    </div>
  );
};

export default EditButton;

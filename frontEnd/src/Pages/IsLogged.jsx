import { API_BASE_URL } from "./SignIn";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import EditButton from "../components/EditButton ";
import AccountCard from "../components/AccountCard";

// fetch pour recupérer les information utilisateur
export const getInfoUser = async (token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/user/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      },
    });

    const jsonResponse = await response.json();
    console.log("info utilisateur:", jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

// Thunk pour récupérer les informations utilisateur
export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async (token, thunkAPI) => {
    try {
      const response = await getInfoUser(token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

function Islogged() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.user.status);

  useEffect(() => {
    const token = localStorage.getItem('token'); //méthode pour obtenir le token
    if (token && status === 'idle') {
      dispatch(fetchUserInfo(token));
    }
  }, [status, dispatch]);


  return (
    <>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user ? `${user.firstName} ${user.lastName}` : '...'}!
        </h1>

        <EditButton />

      </div>
      <h2 className="sr-only">Accounts</h2>

      <AccountCard
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />

      <AccountCard
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />

      <AccountCard
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />

    </>
  );
}

export default Islogged;

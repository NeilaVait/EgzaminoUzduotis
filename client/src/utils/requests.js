import axios from 'axios';

export const addNewUser = async (dataToSend) => {
  try {
    const ats = await axios.post('http://localhost:4000/api/users/new', dataToSend);
    console.log(ats);
    return ats.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getAllUsers = async () => {
  try {
    const ats = await axios.get('http://localhost:4000/api/users');
    if (Array.isArray(ats.data) && ats.data.length) {
      return ats.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (userId) => {
  try {
    const ats = await axios.delete(`http://localhost:4000/api/users/delete/${userId}`);
    if (ats.data) {
      return ats.data;
    }
  } catch (err) {
    console.log(err);
  }
};

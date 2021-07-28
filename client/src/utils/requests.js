import axios from 'axios';

export const addNewUser = async (dataToSend) => {
  try {
    const ats = await axios.post('http://localhost:4000/api/users/new', dataToSend);

    return ats.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

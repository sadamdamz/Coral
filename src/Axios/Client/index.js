import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;


export const InsertLead = async (PostData) => {
  try {
    let api = await axios.post(API_URL + "/api/admin/insertslider", PostData);
    let response = await api.data;
    return response;
  } catch (error) {
    console.log(error)
  }
}
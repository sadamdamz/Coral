import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;


export const InsertLead = async (PostData) => {
  try {
    let api = await axios.post(API_URL + "/api/v1/insertcontactusenquiry", PostData);
    let response = await api.data;
    return response;
  } catch (error) {
    console.log(error)
  }
}

export const getAllSlider = async () => {
  try {
    let api = await axios.get(API_URL+"");
    let response = await api.data;
    return response;
  } catch (error) {
    console.log(error);
  }
}
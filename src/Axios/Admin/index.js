import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export const addImageUpload = async (imagesfiles) => {
  let formData = new FormData();
  formData.append('imagesfiles',imagesfiles);
  const config = { headers: { 'content-type': 'multipart/form-data' }}
  try {
    let image = {};
    let api = await axios.post(API_URL + "/api/admin/slideruploads", formData,config);
    let response = await api.data
    image['slider_image_large'] = await response.ResImageslarge[0];
    image['slider_image_thumb'] = await response.ResImagesthumb[0];
    return image
  } catch (error) {
    console.log(error);
  }
}

export const insertSlider = async (imageFile) => {
  try {
    let PostData = {
      slider_title: null,
      slider_url: null,
      slider_image_large: imageFile.slider_image_large,
      slider_image_thumb: imageFile.slider_image_thumb,
      slider_sequence: null,
      created_by: null,
    }
    let api = await axios.post(API_URL + "/api/admin/insertslider", PostData);
    let response = await api.data;
    return response;
  } catch (error) {
    console.log(error)
  }
}
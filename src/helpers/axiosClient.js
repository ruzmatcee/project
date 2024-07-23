import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://06f3fea646cee63a.mokky.dev/',
  headers: {
    Accept: 'application/json',
  },
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
})

axiosClient.interceptors.response.use((response)=>{
  if (response && response.data){
        return response.data
  }
  return response
})



// Other API methods can be added here as needed

export default axiosClient // Export the axios instance for general use if needed

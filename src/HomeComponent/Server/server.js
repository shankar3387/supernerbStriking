import axios from 'axios';
import querystring from 'querystring'
require('dotenv').config()
export default {
    postRegistration: async (data) => {
      let res = await axios.post(`/Auth/registration`,data);
      return res.data || [];
    },

    getRegistration: async () => {
        let res = await axios.get(`/Auth/registration`);
        return res.data || [];
      },

    postLogin: async (data) =>{
        let res = await axios.post(`/Auth/login`,data);
        return res.data || [];
    },
    postEmailValidation: async (data)=>{
      let res = await axios.post(`/Auth/emailValidation`,data);
        return res.data || [];
    },

    getOtp: async(apidata) =>{
      const Newapi = {
        user:process.env.ApiUserName,
        password:process.env.ApiUserPassword,
        sender:process.env.ApiUserSenderId,
      }
      querystring.stringify(apidata)
      let res = await axios.get(`${process.env.ApiUrl}/sendmessage.php?${querystring.stringify(apidata)}`);
      return res.data || [];
    }
  }
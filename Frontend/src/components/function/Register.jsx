import axios from "axios";

export const register = async(data) => {
    return await axios.post(import.meta.env.VITE_APP_API+'/register', data)
    .then(res => {
        if(res.data.Status === 'Success') {
            alert(res.data.msg);
        } else(err => {
            alert(err.data.Error);
        })
    })
    .catch(err =>{ 
        alert(err.data.Error);
    })
}
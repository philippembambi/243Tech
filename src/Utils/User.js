import CONFIG from "../config"
import axios from "axios"

const loginUser = async (formData) => {
    console.log(formData)
    let reply = ""

    /*
    await axios.get(CONFIG.PATHNET + "login/"+formData[0])
    .then(response =>{
        console.log(response.data.api_response)
        reply = response.data
    })
    .catch(e =>{
        console.log(e)
        reply = e
    })
    return reply;
    */

   await axios.post(CONFIG.PATHNET + "admin/login/", {password: formData})
            .then(response =>{
                console.log(response.data.api_response)
                reply = response.data
            })
            .catch(e =>{
                console.log(e)
                reply = e
            })
        return reply;
}

function logoutUser() {

}

function registerUser() {

}

export {  loginUser, logoutUser, registerUser  }
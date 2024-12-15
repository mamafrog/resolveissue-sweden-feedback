import axios from "axios"

function SendData(params) {
    axios.post(`https://backtwist.onrender.com/create/user`, params)

}

export default SendData

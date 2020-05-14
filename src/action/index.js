import axios from 'axios';
const URL = "http://localhost:8000";

export function registerUser(data) {

    const request = axios.post(`${URL}/api/user/register`, data)
        .then(response => response.data)

    return {
        type: 'POST_REGISTER',
        payload: request
    }
    //     const output = fetch(, {
    //         method: "POST",
    //         body: JSON.stringify(data),
    //         headers: {
    //             'Content-Type':'application/json'
    //         }
    //     }).then(this.props.history.push('/login'))
}

export function loginUser(data) {
    const output = fetch(`${URL})/api/user/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())

    return {
        type: "POST_LOGIN",
        payload: output
    }
}


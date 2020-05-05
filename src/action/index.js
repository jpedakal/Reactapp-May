const URL = "http://localhost:8000";

export default function registerUser(data) {
    const output = fetch(`${URL}/api/user/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type':'application/json'
        }
    }).then(res => res.json())

    console.log('output' + output);
    return {
        type: "POST_REGISTER",
        payload: output
    }
}


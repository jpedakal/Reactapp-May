const URL = "http://localhost:8000";

export function registerUser() {
    const output = fetch(`${URL}/api/user/register`, {
        method: "POST"
    }).then(data => res.json())

    console.log('output' + output);
    return {
        type: "POST_REGISTER",
        payload: output
    }
}
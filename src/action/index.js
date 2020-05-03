const URL = "http://localhost:8000";

export function registerUser() {
    const output = fetch(`${URL}/register`, {
        method: "POST"
    }).then(data => res.json())

    return {
        payload: output
    }
}
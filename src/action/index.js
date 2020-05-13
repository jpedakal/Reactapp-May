const URL = "http://localhost:8000";

function registerUser(data) {
    const output = fetch(`${URL}/api/user/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type':'application/json'
        }
    }).then(res => res.json())

    return {
        type: "POST_REGISTER",
        payload: output
    }
}

function loginUser(data){
  const output= fetch(`${URL})/api/user/login`,{
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(res=> res.json())

  return {
      type: "POST_LOGIN",
      payload: output
  }
}

exports.registerUser=registerUser;
exports.loginUser=loginUser;
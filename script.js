// define the callAPI function that takes a first name and last name as parameters
let callAPI = (firstName,lastName) => {
    // instantiate a headers object
    let myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    let raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
    // create a JSON object with parameters for API call and store in a variable
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    window.location.href = "confirmation.html";
    // make API call with parameters and use promises to get response
    fetch("https://k6nz7xwcvk.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
};
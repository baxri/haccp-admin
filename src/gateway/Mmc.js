

class Mmc {

    login = (grantType, username, password, clientId, clientSecret) => {

        let post = {
            username,
            password,
            grant_type: grantType,
            client_id: clientId,
            client_secret: clientSecret,
        }

        console.log(post);

        localStorage.setItem("ok", "value");

        fetch('http://haccp.milady.io/oauth/token', {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                // "Accept": "application/json",
                // "Content-Type": "application/json"
            },
        }).then(function (response) {

            console.log(response.text());

        }, function (error) {
            console.log(error.message); //=> String
        })

    }

    user = () => new Promise((result, reject) => {

        setTimeout(() => {

            result("RESULT FROM PROMISE");

        }, 2000);

    });

}


export default (new Mmc());



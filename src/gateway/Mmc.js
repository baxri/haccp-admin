

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

        fetch('http://haccp.milady.io/oauth/token', {
            method: "POST",
            body: new FormData(post),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
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



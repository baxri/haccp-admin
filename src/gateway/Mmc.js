

class Mmc {

    login = (grantType, username, password, clientId, clientSecret) => {

        console.log(username);
        console.log(password);
        console.log(grantType);
        console.log(clientId);
        console.log(clientSecret);

    }

    user = () => new Promise((result, reject) => {

        setTimeout(() => {

            result("RESULT FROM PROMISE");

        }, 2000);

    });

}


export default (new Mmc());



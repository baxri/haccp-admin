

class Mmc {

    user = () => new Promise((result, reject) => {


        setTimeout(() => {

            result("RESULT FROM PROMISE");

        }, 2000);

    });

}


export default (new Mmc());



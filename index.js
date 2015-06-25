var jsSpark = require('js-spark')({workers: 8});
var task = jsSpark.jsSpark;
var q = jsSpark.q;

function giveMeNiccerResponce(str) {
    return "THIS IS NICCER RESPONSE " + str + 'seriusly';
}


task([20, 30, 40, 50])
    // this is executed on client side
    .map(function addOne(num) {
        return num + 1;
    })
    .filter(function isBiggerThen35(el){
        return 35 <= el;
    })
    .reduce(function sumUp(sum, num) {
        return sum + num;
    })
    .thru(giveMeNiccerResponce)
    .run()
    .then(function (data) {
        // this is executed on back on server
        console.log(data);
    });


//var tasks = ['ala ma kota', 'big bunny buks']
//    .map(function (el) {
//        return task(el).map(function addOne(num) {
//            return num + 1;
//        })
//    })
//    .run();
//
//
//q.all(tasks).

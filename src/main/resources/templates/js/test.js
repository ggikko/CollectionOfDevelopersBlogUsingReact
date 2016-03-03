/**
 * Created by parkjihong on 16. 3. 2..
 */


// -- 0 -- PROMISE

//var _promise = function (param) {
//
//    return new Promise(function (resolve, reject) {
//
//        // 비동기를 표현하기 위해 setTimeout 함수를 사용
//        window.setTimeout(function () {
//
//            // 파라메터가 참이면,
//            if (param) {
//
//                // 해결됨
//                resolve("해결 완료");
//            }
//
//            // 파라메터가 거짓이면,
//            else {
//
//                // 실패
//                reject(Error("실패!!"));
//            }
//        }, 1000);
//    });
//};

//_promise(true)
//    .then(function (text) {
//        // 성공시
//        console.log(text);
//    }, function (error) {
//        // 실패시
//        console.error(error);
//    });

//_promise(true)
//    .then(JSON.parse)
//    .catch(function () {
//        window.alert('체이닝 중간에 에러가!!');
//    })
//    .then(function (text) {
//        console.log(text);
//    });

//var promise1 = function() {
//    new Promise(function (resolve, reject) {
//
//        // 비동기를 표현하기 위해 setTimeout 함수를 사용
//        window.setTimeout(function () {
//
//            // 해결됨
//            console.log("첫번째 Promise 완료");
//            resolve("11111");
//
//        }, Math.random() * 20000 + 1000);
//    });
//}
//
//var promise2 = function() {
//    return new Promise(function (resolve, reject) {
//
//        // 비동기를 표현하기 위해 setTimeout 함수를 사용
//        window.setTimeout(function () {
//
//            // 해결됨
//            console.log("두번째 Promise 완료");
//            resolve("222222");
//
//        }, Math.random() * 10000 + 1000);
//    });
//};
//
//promise2().then(function(a){
//    console.log(a);
//});

// -- 1 -- this practice
//function Person(name){
//    this.name = name;
//    console.log(this);
//};
//
//Person.prototype.happy = function(haha){
//    var that = this;
//    console.log(this.name+ " : " + haha);
//
//    return function(){
//        return this;
//    };
//}
//
//var call = new Person('하하');
//call.happy("gaga");
//
//var aa = {
//    d : 4
//}

var obj = {
    d:5
}

var k = function(){
    console.log(this.d);
}.bind(obj);

k();

//(function Person(a,b){
//    console.log(this.d);
//})();




//gogo();
//Person.prototype.babo = function(){return this.k;}

//var haha = new Person(1,2);
//haha.babo();


//Promise.all([promise1, promise2]).then(function (values) {
//    console.log("모두 완료됨", values);
//});

// -- 2 -- call apply bind comparison




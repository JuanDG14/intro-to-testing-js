// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
}

// function sayHello(input) {
//     if (input === "Alex") {
//         return "Hello, Alex!";
//     } else if (input === "Pat") {
//         return "Hello, Pat!"
//     } else {
//         return "Hello, Jane!";
//     }
// }
// function sayHello(input) {
//     return "Hello, " + input + "!";
// }
function sayHello(input) {
    if (input === true) {
        return "Hello, World!"
    } else if (input === false) {
        return "Hello, World!"
    } else if (input) {
        return "Hello, " + input + "!";
    } else {
        return "Hello, World!"
    }
}

//addOne
// function addOne()
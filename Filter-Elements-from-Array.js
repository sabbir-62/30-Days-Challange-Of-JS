var filter = function (arr, fn) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};
const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n) { return n > 10; }
const result = filter(arr, fn)

console.log(result)
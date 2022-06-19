/* ---------------------------------------------------------- 1 MASALA---------------------------------------------------- */

var numbers = [1, 3, 0, 5, 0, 7, 0];

function allZeros(nums) {
  let zeros = 0;
  for (let i = 0; i < nums.length; i++) {
    let isZero = nums[i] === 0;
    if (isZero) {
      zeros++;
      nums.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < zeros; i++) {
    nums.push(0);
  }
  return nums;
};

var anyString = "";
var toText = anyString + allZeros(numbers);
var withoutCommas = toText.replaceAll(",", "");

console.log(withoutCommas);

/* ---------------------------------------------------------- 2 MASALA---------------------------------------------------- */

var inputs = [true, true, false, true, false];

function trues(array) {
    var count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      count++
    } else {
    }
  }

  return count;
}

console.log(trues(inputs));


/* ---------------------------------------------------------- 3 MASALA---------------------------------------------------- */

var number = [1,2,0,-1,-2,3,4];

function addition(array) {
    var count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            count += array[i]
        }
    }
    return count;
    
}

console.log(addition(number));



/* ---------------------------------------------------------- 4 MASALA---------------------------------------------------- */


var array = [
    {name:"Ali", price:200},
    {name:"Umid", price:800},
    {name:"Sardor", price:400}
]

function findMax(arr) {
    var max_str = array[0].price
    var ans = max_str
    for (let i = 0; i < arr.length; i++) {
        var maxi = array[i].price
        if (maxi > max_str) {
            ans = array[i].name;
            max_str = maxi
        }
    }
    return ans;
}

console.log(findMax(array));
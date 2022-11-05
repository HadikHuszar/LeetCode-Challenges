
// nums = [1, 1, 2] // [1,2]
// nums = [0,0,1,1,1,2,2,3,3,4] // [0, 1, 2, 3, 4]'
nums = []

////////////// USING BUILT-IN METHODS /////////////
// var removeDuplicates = function(arr) {
//     let tempSet = new Set(arr);
//     // for (let i=0; i < nums.length; i++) {
//     //     tempSet.add(nums[i])
//     // }

//     let array = [...tempSet];
//    return array;
// };

// console.log(removeDuplicates(nums));


//////////// NO METHOD VERSION /////////////

// var removeDuplicates = function(nums) {

//     let tempArray = [];

//     for (let i=0; i < nums.length; i++) {

//         if (tempArray[tempArray.length-1] !== nums[i]) {
//         tempArray.push(nums[i])
//         }
        
//     }
//     return(tempArray);
// };

// console.log(removeDuplicates(nums));

// removeDuplicates();

//////////////// IN PLACE REMOVAL ////////////

// nums = [0,0,1,1,1,2,2,3,3,4] // [0, 1, 2, 3, 4]
// indx = [0,1,2,3,4,5,6,7,8,9]
// amnt = [1,2,3,4,5,6,7,8,9,10]\\

var removeDuplicates = function(nums) {

    if(nums.length === 0) {     
        return nums;
    }

    for (let i = nums.length-1; i > 0;  i--) {


        if (nums[i] === nums[i-1]) {

            nums.splice(i,1)

        }

    }
    return nums;

};

console.log(removeDuplicates(nums));


//////////////// IN-PLACE REMOVE #2 ////////////////

// var removeDuplicates = function(arr) {

//     for (let i = 0; i < nums.length-1; i++) {

//         if (nums[i] === nums[i+1]) {

//             nums.splice(i,1)

//         }

//     }
//     console.log(nums);

// };

// removeDuplicates();
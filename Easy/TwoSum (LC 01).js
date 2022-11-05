

let nums = [3, 2, 4];
let target = 6;






const twoSum = (array, target) => {
    const hashtable = {};

    for ( let i = 0; i < array.length; i++) {


       let complement = target - array[i];

       let sentence = `The index numbers of the two numbers ${array[i]} and ${complement} that add up to the target of ${target} are:`;

       if ( hashtable.hasOwnProperty(complement)){
         console.log(sentence,[hashtable[complement], i])

       }

       hashtable[array[i]] = i;   
    };
    
    return null;
};


   
twoSum(nums, target)
   






// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// let nums = [3, 2, 4];
// let target = 6;

// var twoSum = function(arr, int) {
    
//     let tempArray = {};
   
//     for (let i = 0; i < nums.length; i++) {

//          let number = nums[i];

//         if (tempArray[number] >= 0) {
//             return [tempArray[number], i]
//         } else {
            
//             if (!tempArray[number]) {
//                 tempArray[target - number] = i 
//             }
//         }       
//     }
//    };
   
//    console.log(twoSum())
   
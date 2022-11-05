
list1 = [1, 2, 4];
list2 = [1, 3, 4]; // [1, 1, 2, 3, 4, 4]

// list1 = [];
// list2 = []; //[]

// list1 = [];
// list2 = [0]; //[0]

//////////////////// USING BUILT-IN METHODS /////////////////
// var mergeTwoLists = function(list1, list2) {
//     let newlist = [];
//     newlist = list1.concat(list2);
//     console.log(newlist.sort());
// };

// mergeTwoLists(list1, list2)



//////////////////  USING ALGORITHM  /////////////////

var mergeTwoLists = function(list1, list2) {

    if (list1.length === 0 || list2.length === 0 ) {
        console.log("[]");
    }
    let newlist = list1;

    for (let i=0; i < list2.length; i++) {

        newlist.push(list2[i]);
    }

    for (let i=0; i < newlist.length; i++) { 
        
        if (newlist[i] > newlist[i+1]) {
            let done = false;
            while (!done) {
                done = true;
                for (let i = 1; i < newlist.length; i ++) {
                    if (newlist[i-1] > newlist[i]) {
                        done = false;
                        let temp = newlist[i-1];
                        newlist[i-1] = newlist[i];
                        newlist[i] = temp;
                    }
                }
            }
            console.log(newlist); 
        }     
    }
};

// mergeTwoLists(list1, list2)

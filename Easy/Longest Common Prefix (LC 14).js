let strs = ["flower", "flow", "flight"]

var longest= function(strs) {
    

    if (strs.length === 0) return '';
    var firstString = strs[0];
    var commonLength = firstString.length;
    for (var i = 1; i < strs.length; i++) {
        for (var j = 0; j < commonLength; j++) {
            if (!strs[i][j]) break;
            // console.log(strs[i][j])
            // console.log(strs[i]);
            // console.log(strs[j]);
            if (firstString[j] !== strs[i][j]) break;
            // console.log(firstString[j])
        }
        commonLength = j;

    }

    return(firstString.substring(0, commonLength));
};

console.log(longest(strs));
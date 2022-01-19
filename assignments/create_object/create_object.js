function CreateObject(arr) {
    // Write your code here
    var object={};
    var index=1
    for(var i=0;i<arr.length-1;i=i+2)
    {
        object[arr[i]]=arr[index]
        index=index+2
    }
    return object
}

module.exports = CreateObject;

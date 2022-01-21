function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if(hasDrivingLiscence)
    {
        if (isTired){
            return "You shouldn't drive"
        }
        if(isSober){
            return "You can drive"
        }
        return "You shouldn't drive"
    }
    return "You cannot drive"
}
module.exports = CanDrive;

// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if((typeof mass==='number' && typeof height==='number') && mass<=0 || height<=0){
        return "INVALID INPUT"
    }else if(typeof mass===number && typeof height===number){
        return (mass/(height*height))
    }
}

module.exports = BMICalculator;

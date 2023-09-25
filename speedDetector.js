function calculateSpeed(speed){
    if(speed < 70){
        return "Ok"
    }
    else{
        let overSpeed = speed - 70 // Calculate motorist overspeed

        let limitPoint = parseInt(overSpeed / 5) //convert overspeed to penalty points

        if(limitPoint <= 12){
            return `Points: ${limitPoint}` //return points
        }
        else if(limitPoint > 12){
            return "License Suspended" //Suspend license if points is > 12
        }
    }
    

    
}
console.log(calculateSpeed(130))
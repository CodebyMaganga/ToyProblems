function calculateSpeed(speed){
    if(speed < 70){
        return "Ok"
    }
    else{
        let overSpeed = speed - 70

        let limitPoint = parseInt(overSpeed / 5)

        if(limitPoint < 12){
            return `Points: ${limitPoint}`
        }
        else if(limitPoint >= 12){
            return "License Suspended"
        }
    }
    

    
}
console.log(calculateSpeed(130))
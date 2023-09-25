let personalRelief = 2400
let contributionBenefit = 1080
let taxableIncome

function promptUser(){
    let saveSalary = parseFloat(prompt("Enter Salary: ")) //Save User's salary
    let saveContribution = parseFloat(prompt("Enter Contribution Benefit: ")) //save users contribution benefit
   
    /*Check if user entered any contribution benefits and if salary is a number */
    if(!isNaN(saveSalary) && saveContribution > 0){
        contributionBenefit = saveContribution //
    } 

    taxableIncome = saveSalary - contributionBenefit

    let totalTax, netSalary;

    /*Calculate PAYE using KRA figures */

    if(saveSalary > 0 && saveSalary <= 24000){
            totalTax = firstTier()
        }else if(saveSalary > 24000 && saveSalary <= 32333){           
            totalTax = secondTier(taxableIncome)           
        }
        else if(saveSalary > 32333 && saveSalary <= 500000){
            totalTax = (secondTier(taxableIncome) + thirdTier(taxableIncome))
        }
        else if(saveSalary > 500000 && saveSalary <= 800000){
            totalTax = secondTier(taxableIncome) + thirdTier(taxableIncome) + fourthTier(taxableIncome)
        }
        else if(saveSalary > 800000){
            totalTax = secondTier(taxableIncome) + thirdTier(taxableIncome) + fourthTier(taxableIncome) + finalTier(taxableIncome)      
        }

        netSalary = taxableIncome - totalTax
        return netSalary
}

/*Function calculate the first 24000KSh */
function firstTier(){    
    return 0 //the first tier has a personalrelief of 2400 which equates to free
}

/*Calculate tax for the next 8333Ksh*/
function secondTier(taxableIncome){
    let secondBatch = taxableIncome - 24000

    if(secondBatch < 8333){
        return secondBatch * 0.25
    }else if(secondBatch >= 8333){
        return 2083.25
    }
}

/*Calculate tax for the next 467667Ksh */
function thirdTier(taxableIncome){
    let thirdBatch = taxableIncome - 32333

    if(thirdBatch < 467667){
        return thirdBatch * 0.3
    }else if(thirdBatch >= 467667){
        return  140300.1
    }
}

/*Calculate tax for the next 300000Ksh */
function fourthTier(taxableIncome){
    let fourthBatch = taxableIncome - 500000

    if(fourthBatch < 300000){
        return fourthBatch * 0.325
    }else if(fourthBatch >= 300000){
        return  97500
    }
}

/*Calculate tax for the next 800000Ksh and above */
function finalTier(taxableIncome){
    let fifthBatch = taxableIncome - 800000

    
        return fifthBatch * 0.35
}

promptUser()
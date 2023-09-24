let personalRelief = 2400
let contributionBenefit = 1080
let taxableIncome

function promptUser(){
    let saveSalary = parseFloat(prompt("Enter Salary: "))
    let saveContribution = parseFloat(prompt("Enter Contribution Benefit: "))
    taxableIncome = saveSalary - contributionBenefit
    
    let rate, totalTax, tax, netSalary;
    
    if(isNaN(saveSalary) || isNaN(saveContribution)){
        return "Invalid Input"
    }   
    if(saveSalary > 0 && saveSalary <= 24000){
            totalTax = firstTier()
            netSalary = saveSalary - totalTax
            return netSalary
        }else if(saveSalary > 24000 && saveSalary <= 32333){           
            totalTax = secondTier(taxableIncome)
            netSalary = taxableIncome - totalTax           
            return netSalary           
        }
        else if(saveSalary > 32333 && saveSalary <= 500000){
            totalTax = (secondTier(taxableIncome) + thirdTier(taxableIncome))
            netSalary = taxableIncome - totalTax
            return netSalary
        }
        
        else 
        {
            return "Out of Range"
        }
    

}

function firstTier(){    
    return 0
}

function secondTier(taxableIncome){
    let secondBatch = taxableIncome - 24000

    if(secondBatch < 8333){
        return secondBatch * 0.25
    }else if(secondBatch >= 8333){
        return 2083.25
    }
}

function thirdTier(taxableIncome){
    let thirdBatch = taxableIncome - 32333

    if(thirdBatch < 467667){
        return thirdBatch * 0.3
    }else if(thirdBatch >= 467667){
        return  140300.1
    }
}






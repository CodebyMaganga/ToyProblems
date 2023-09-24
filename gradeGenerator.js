function promptGrade() {
    let savePrompt = prompt("Enter Student Grade: ");

    if (savePrompt !== null) {
        savePrompt = parseInt(savePrompt);
    }

    if (savePrompt) {
        if (savePrompt >= 0 && savePrompt < 40) {
            return "E";
        } else if (savePrompt >= 40 && savePrompt <= 49) {
            return "D";
        } else if (savePrompt >= 50 && savePrompt < 60) {
            return "C";
        } else if (savePrompt >= 60 && savePrompt <= 79) {
            return "B";
        } else if (savePrompt >= 80 && savePrompt <= 100) {
            return "A";
        }
        else if(savePrompt > 100){
            return "Cannot Grade Student"
        }
    } else {
        return "Invalid Input";
    }
}

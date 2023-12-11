function validation (){
    alert("you have change value")
}


const fname = document.getElementById("fname");
const fnameLabel  = document.getElementById("fname-label")
const inputDataFname = document.getElementById("input-data-fname")

function validatefName(event) {
    const fnameValue = fname.value


    // color: 
    // border-bottom: 3px solid #ff0202a8;


    // switch (fnameValue) {
    //     case  '':
    //         fnameLabel.style.color = "#ff2c2c" 
    //         inputDataFname.style.borderBottom = "3px solid #ff0202a8"
    //         break;
    //     // case 
    
    //     default:
    //         break;
    // }

    if(fnameValue === ''){

        fnameLabel.style.color = "#ff2c2c" 
                inputDataFname.style.borderBottom = "3px solid #ff0202a8"
        
        
    }else{
        fnameLabel.style.color = "unset"  
        inputDataFname.style.borderBottom = "unset"
    }


    
}



fname.addEventListener("change",validatefName)





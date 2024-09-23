// Donate Now Button's DOM 

let donateNowButton1 = getButtonsById("donateNowButton1")
donateNowButton1.addEventListener("click",function(){
    let donationAmount1 =getInputValueId("donationAmount1")
    if(donationAmount1>0){
        let mainBalance = parseInt(document.getElementById("mainBalance").innerText)
        let changeAmount = parseInt(document.getElementById("donateAmountShow").innerText)
       
        changeAmount =parseInt(changeAmount+donationAmount1) 
        mainBalance = mainBalance-donationAmount1
        document.getElementById("donateAmountShow").innerText = changeAmount +"BDT"
        document.getElementById("mainBalance").innerText = mainBalance +" BDT"
        document.getElementById("popUp").classList.remove("hidden")
      
    }else{
        alert("Fuck OFF")
    }
   


})
// close popUP Button logic 
let popUpButton = getPopUpButton("popUpCloseButton")
popUpButton.addEventListener("click",function(){
    document.getElementById("popUp").classList.add("hidden")
})

// Feni donation BUtton DOM 
let donateNowButton2 = getButtonsById("feniDonateButton")
donateNowButton2.addEventListener("click",function(){
    let donationAmount2 =getInputValueId("feniDonateAmountValue")
    if(donationAmount2>0){
        let mainBalance = parseInt(document.getElementById("mainBalance").innerText)
        let changeAmount = parseInt(document.getElementById("feniDonateAmountShow").innerText)
       
        changeAmount =parseInt(changeAmount+donationAmount2) 
        mainBalance = mainBalance-donationAmount2
        document.getElementById("feniDonateAmountShow").innerText = changeAmount +"BDT"
        document.getElementById("mainBalance").innerText = mainBalance +" BDT"
        document.getElementById("popUp2").classList.remove("hidden")
    }else{
        alert("Fuck OFF")
    }
   

})

let popUpButton2 = getPopUpButton("popUpCloseButton2")
popUpButton2.addEventListener("click",function(){
    document.getElementById("popUp2").classList.add("hidden")
})


// Quata Movment logic here 
let donateNowButton3 = getButtonsById("quataMovmentButton")
donateNowButton3.addEventListener("click",function(){
    let donationAmount3 =getInputValueId("quataMovmentDonationAmount")
    if(donationAmount3>0){
        let mainBalance = parseInt(document.getElementById("mainBalance").innerText)
        let changeAmount = parseInt(document.getElementById("quataMovment DonationShow").innerText)
       
        changeAmount =parseInt(changeAmount+donationAmount3) 
        mainBalance = mainBalance-donationAmount3
        document.getElementById("quataMovment DonationShow").innerText = changeAmount +"BDT"
        document.getElementById("mainBalance").innerText = mainBalance +" BDT"
        document.getElementById("popUp3").classList.remove("hidden")
    }else{
        alert("Fuck OFF")
    }
})


let popUpButton3 = getPopUpButton("popUpCloseButton3")
popUpButton3.addEventListener("click",function(){
    document.getElementById("popUp3").classList.add("hidden")
})
// Donate Now Button's DOM 

let donateNowButton1 = getButtonsById("donateNowButton1")
donateNowButton1.addEventListener("click",function(event){
    event.preventDefault()
    let donationAmount1 =getInputValueId("donationAmount1")
    if(donationAmount1>0){
        let mainBalance = parseInt(document.getElementById("mainBalance").innerText)
        let changeAmount = parseInt(document.getElementById("donateAmountShow").innerText)
       
        changeAmount =parseInt(changeAmount+donationAmount1) 
        mainBalance = mainBalance-donationAmount1
        document.getElementById("donateAmountShow").innerText = changeAmount +"BDT"
        document.getElementById("mainBalance").innerText = mainBalance +" BDT"
        document.getElementById("popUp").classList.remove("hidden")
       
        let time = Date()
        let div = document.createElement("div")
   
        div.innerHTML = 
         `
        <div class="w-3/4 mx-auto border-solid border-2 border-[#1111111a] rounded-[8px] p-7 mb-4">
        <h1 class="mb-3"> ${donationAmount1} Taka is Donated for Flood Relief in Noakhali,Bangladesh</h1>
        <p>Date: ${time}</p>

      </div>

   `
    let history = document.getElementById("historyPage")
    history.appendChild(div)
      
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
        let time = Date()
        let div = document.createElement("div")
   
        div.innerHTML = 
         `
        <div class="w-3/4 mx-auto border-solid border-2 border-[#1111111a] rounded-[8px] p-7 mb-4">
        <h1 class="mb-3"> ${donationAmount2} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
        <p>Date: ${time}</p>

      </div>

   `
    let history = document.getElementById("historyPage")
    history.appendChild(div)
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
        let time = Date()
        let div = document.createElement("div")
   
        div.innerHTML = 
         `
        <div class="w-3/4 mx-auto border-solid border-2 border-[#1111111a] rounded-[8px] p-7 mb-4">
        <h1 class="mb-3"> ${donationAmount3} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
        <p>Date:${time}</p>

      </div>

   `
    let history = document.getElementById("historyPage")
    history.appendChild(div)
    }else{
        alert("Fuck OFF")
    }
})


let popUpButton3 = getPopUpButton("popUpCloseButton3")
popUpButton3.addEventListener("click",function(){
    document.getElementById("popUp3").classList.add("hidden")
})




// history button er kaj 

let historyButton = getButtonsById("history-button")

historyButton.addEventListener("click",function(){
    document.getElementById("mainPageSection").classList.add("hidden")
    document.getElementById("historyPage").classList.remove("hidden")
    historyButton.classList.add("bg-green-300")
    document.getElementById("donationMainButton").classList.remove("bg-green-300")

})


// donationMainButton er kaj 
let donationMainButton = getButtonsById("donationMainButton")
donationMainButton.addEventListener("click",function(){
    document.getElementById("mainPageSection").classList.remove("hidden")
    document.getElementById("historyPage").classList.add("hidden")
    donationMainButton.classList.add("bg-green-300")
    document.getElementById("history-button").classList.remove("bg-green-300")

})
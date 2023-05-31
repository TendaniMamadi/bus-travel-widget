//Reference elements
locationElem = document.querySelector(".kasi");
pointsElem = document.querySelector(".inputPoints");
radioElem = document.querySelector(".times");
calculateBtn = document.querySelector(".btn");
returnElem = document.querySelector(".checked")

singleTrip = document.querySelector(".single")
priceTripElem = document.querySelector(".price_per_trip_single")
number_of_return_trip = document.querySelector(".return_trips")
returnPriceTripElem = document.querySelector(".price_per_trip_return")


//create instance
const busride = Busride()

//DOM Events

calculateBtn.addEventlistener("click",function(){
    
alert("clicked")
})

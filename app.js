// MODAL
// Get the modal
var modal = document.getElementById('modal');
// Get the button that opens the modal
var btn = document.getElementById("submitBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal 
submitBtn.onclick = function() {
  modal.style.display = "block";
  event.preventDefault();
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// MODAL OUTPUT
// get the coffee form options
var coffee = document.getElementById('select');
// get the modal output element
var reciept = document.getElementById('reciept');

// when a new <option is selected, listen for change / option selection
coffee.addEventListener('change', function() {
  var index = coffee.selectedIndex;
  // test if coffee index is returning true
  // console.log(coffee.value);

  // add the data to the modal element
  reciept.innerHTML = 'Your order of #1 ' + '<u>' + coffee.value + '</u>' + ' is now being prepared!'; 
});

// GOOGLE MAPS
// map variable
var map;
// initiate map function
function initMap() {
    map = new google.maps.Map(document.getElementById('maps'), {
        center: {lat: -37.813, lng: 144.96},
        zoom: 12
    });
}




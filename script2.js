var fact = document.getElementById ("fact");
var myButton = document.getElementById ("myButton");
var count = 0;
myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList [count];
  count ++;
  if (count == factList.length())
  {
    count = 0;
  }
}

function decrementHP() {
  /* get elements with the ID of HP */
  let e1 = document.getElementById ("hp");
  /* Set 'currentCount' to the text of the element */
  let currentCount = e1.innerText;

  if (currentCount == 0) {
    alert ("Congradulation!, you have won a a trip to Mars!");

  } else {
    /* Decrement current count and set it as the new text in our element */
    e1.innerText = -- currentCount;
  }
};
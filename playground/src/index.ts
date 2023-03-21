/*
  Truthiness Guards P1
  - pic

*/

// this element may exist or maybe null
const el = document.getElementById('idk')

// hover on each case
if (el) {
  el.addEventListener('click', () => {})
} else {
  el
}

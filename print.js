
function printClean() {
  document.body.classList.add('print-mode');
  window.print();
  document.body.classList.remove('print-mode');
}

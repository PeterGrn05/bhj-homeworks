const bookReader = document.querySelector('.book');
const bookControls = document.querySelector('.book__control');

for (let control of bookControls.children) {
  control.addEventListener('click', change)
}

function change(event) {
  event.preventDefault();
  if (event.target.dataset.size === 'big') {
    bookReader.classList.add('book_fs-big');
    bookReader.classList.remove('book_fs-small');
  } else if (event.target.dataset.size === 'small') {
    bookReader.classList.add('book_fs-small');
    bookReader.classList.remove('book_fs-big');
  } else {
    bookReader.classList.remove('book_fs-small');
    bookReader.classList.remove('book_fs-big');
  }
  
  for (let letter of document.querySelectorAll('.font-size')) {
    letter.classList.remove('font-size_active');
  }
  event.target.classList.add('font-size_active');
}
let library = [];
let newBook;
let subBtn = document.querySelector('#sub');

subBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBook();
});

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages + ' pages'
};

function addBook() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    newBook = new Book(title, author, pages);
    console.log(newBook);
    library.push(newBook);
   //saveData()
    document.forms[0].reset();
};

function getBook() {
    
}

function createBook() {
    let display = document.querySelector('.library');
    let bookBox = document.createElement('div');
    let titleBox = document.createElement('div');
    let authorBox = document.createElement('div');
    let pagesBox = document.createElement('div');
}

// function saveData() {
//     localStorage.setItem(`library`, JSON.stringify(library));
// };
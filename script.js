let library = [];
let newBook;
let subBtn = document.querySelector('#sub');

window.onload = retrieve();

subBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBook();
    getLibrary();
    bookForm.style.display = 'none';
});

class Book {
    constructor (title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages + ' pages'
        this.read = read
    };
}

function addBook() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    newBook = new Book(title, author, pages, read);
    library.push(newBook);
    saveData()
    document.forms[0].reset();
};

function getLibrary() {
    const libraryDisplay = document.querySelector('.library');
    const books = document.querySelectorAll('.book');
    books.forEach(book => libraryDisplay.removeChild(book));
    
    for (i = 0; i < library.length; i++) {
        createBook(library[i]);
    };
};

function createBook(book) {
    let display = document.querySelector('.library');
    let bookBox = document.createElement('div');
    let titleBox = document.createElement('div');
    let authorBox = document.createElement('div');
    let pagesBox = document.createElement('div');
    let readBox = document.createElement('div');
    let iconBox = document.createElement('div');
    let remove = document.createElement('button');
    let readBtn = document.createElement('button');
    
    bookBox.classList.add('book');
    bookBox.setAttribute('id', library.indexOf(book));
    
    titleBox.classList.add('title');
    titleBox.innerText = book.title;
    bookBox.appendChild(titleBox);

    authorBox.classList.add('author');
    authorBox.innerHTML = `By: ${book.author}`;
    bookBox.appendChild(authorBox);
    
    pagesBox.classList.add('pages');
    pagesBox.innerHTML = book.pages;
    bookBox.appendChild(pagesBox);

    readBtn.classList.add('readCheck');
    readBox.classList.add('read');
    if(book.read === true) {
        readBox.innerText = 'Status: Read'
        readBtn.innerHTML = '<i id="notRead" class="material-symbols-outlined">menu_book</i>';
        readBtn.addEventListener('click', () => {
            book.read = false;
            saveData();
            getLibrary();
        })
    }
    else {
        readBox.innerHTML = 'Status: Not Read'
        readBtn.innerHTML = '<i id="didRead" class="material-symbols-outlined">done</i>';
        readBtn.addEventListener('click', () => {
            book.read = true;
            saveData();
            getLibrary();
        })
    };

    bookBox.appendChild(readBox);
    
    iconBox.appendChild(readBtn)
    iconBox.appendChild(remove)
    
    remove.classList.add('remove'); 
    remove.innerHTML = '<i id="trash" class="material-symbols-outlined">delete</i>';
    bookBox.appendChild(iconBox);
    display.appendChild(bookBox);

    remove.addEventListener('click', () => {
        library.splice(library.indexOf(book), 1);
        saveData();
        getLibrary();
    })
}

function saveData() {
     localStorage.setItem(`library`, JSON.stringify(library));
};

function retrieve() {
    if(!localStorage.library) {
        getLibrary();
    }
    else {
        let obj = localStorage.getItem('library');
        obj = JSON.parse(obj);
        library = obj;
        getLibrary();
    }
}

// Book form
let bookForm = document.querySelector('.bookForm');
let openForm = document.querySelector('.add');
let closeForm = document.querySelector('.close');

openForm.onclick = () => {
    bookForm.style.display = 'block';
};

closeForm.onclick = () => {
    bookForm.style.display = 'none';
};

window.onclick = (e) => {
    if (e.target == bookForm) {
        bookForm.style.display = 'none';
    };
};
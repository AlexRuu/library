let library = [];
let newBook;
let subBtn = document.querySelector('#sub');

subBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBook();
    getLibrary();
    bookForm.style.display = 'none';
});

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages + ' pages'
    this.read = read
};

function addBook() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    newBook = new Book(title, author, pages, read);
    console.log(read)
    library.push(newBook);
   //saveData()
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
    let remove = document.createElement('button');
    
    bookBox.classList.add('book');
    bookBox.setAttribute('id', library.indexOf(book));
    
    titleBox.classList.add('title');
    titleBox.innerText = book.title;
    bookBox.appendChild(titleBox);

    authorBox.classList.add('author');
    authorBox.innerHTML = book.author;
    bookBox.appendChild(authorBox);
    
    pagesBox.classList.add('read');
    pagesBox.innerHTML = book.pages;
    bookBox.appendChild(pagesBox);

    readBox.classList.add('read');
    if(book.read === true) {
        pagesBox.innerHTML = 'Read'
    }
    else {
        pagesBox.innerHTML = 'Not Read'
    };
    bookBox.appendChild(readBox);
    
    remove.classList.add('remove'); 
    remove.innerText = 'Remove';
    bookBox.appendChild(remove);
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


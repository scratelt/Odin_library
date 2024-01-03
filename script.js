const newBookModal = document.getElementById('newBookDialog');
const newBookButton = document.getElementById('newBookButton');
const closeBookButton = document.getElementById('closeBookButton');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const submitButton = document.getElementById('submitButton');
const form = document.getElementById('newBookForm');
const libraryDisplay = document.getElementById('libraryDisplay');




const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')
const theLordOfTheRings = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1178, 'not read yet')
const theSilmarillion = new Book('The Silmarillion', 'J.R.R. Tolkien', 365, 'not read yet')


myLibrary = [theHobbit, theLordOfTheRings, theSilmarillion];
displayBooks();


Book.prototype.readOrNot = function () {
    toggleReadStatus(myLibrary.indexOf(this));
};



function displayBooks() {
    libraryDisplay.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        console.table(myLibrary[i]);
        const bookContainer = document.createElement('div');
        const bookInfo = document.createElement('p');
        bookInfo.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages, ${myLibrary[i].read}`;
        
        const readButton = document.createElement('button');
        readButton.textContent = 'Read';
        readButton.addEventListener('click', () => toggleReadStatus(i));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            displayBooks();
        });
        bookContainer.appendChild(bookInfo);
        bookContainer.appendChild(readButton);
        bookContainer.appendChild(deleteButton);
        libraryDisplay.appendChild(bookContainer);

        
    }
}


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}




function addBookToLibrary() {
    let title = titleInput.value
    let author = authorInput.value
    let pages = pagesInput.value
    let read = getReadValue();
    let book = new Book(title, author, pages, read ? 'read' : 'not read yet')
    myLibrary.push(book)
    displayBooks();
}


function toggleReadStatus(index) {
    myLibrary[index].read = myLibrary[index].read === 'read' ? 'not read yet' : 'read';
    displayBooks(); // Update the displayed library after toggling the read status
}


const getReadValue = () => {
    // Get the value of the selected radio button
    return form.querySelector('input[name="read"]:checked').value === 'yes';
};

// function that loops through myLibrary and displays each book

// new book button that brings up a form to fill out (author, title, pages, read) <dialog> tag
newBookButton.addEventListener('click', () => {
    newBookModal.showModal();
});

closeBookButton.addEventListener('click', () => {
    newBookModal.close();
});

submitButton.addEventListener('click', () => {
    event.preventDefault();
    addBookToLibrary();
    newBookModal.close();
});

// readInput.addEventListener('change', readOrNot);
// submit button that adds the book to the library and closes the form
// delete button that removes the book from the library
// read button that changes the read status of the book
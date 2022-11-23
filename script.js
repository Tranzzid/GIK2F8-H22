"use strict";
/* vad ska vi göra här? */
let bookList = []

window.addEventListener("load", () => {
    getAll().then((apiBooks) => (bookList = apiBooks));
});

const searchInput = null;

const searchField = document.getElementById("searchField");
searchField.addEventListener("keyup", handleKeyPress);


function handleKeyPress(event) {
    /*
    Ta emot/läsa av värdet i inputfältet.
    Sicka värdet till searchBooks.
    searchBooks returnerar en filtrerad liseta.
    Filtrerade lisstan skickas till renderBookList
     */
    searchBooks(event.target.value);
}

function searchBooks(searchTerm) { 
    const filteredList = bookList.filter( 
        ({title, author}) => 
        title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||  
        author.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
        );
    
    /*     if (searchTerm.length > 0) {
        for (let i = 0; i < booklist.length; i++) {
            const title = booklist[i].title.toLowerCase();
            if (title.indexOf(searchTerm.toLowerCase()) >= 0) {
                filteredList.push(booklist[i]);
            }
        }
    } */
    
    renderBookList(filteredList)
}

function renderBookList(bookList) {
    /* Element i HTML-listan visas/döljs beroende på listans innehåll. */
    const existingElement = document.querySelector(".book-list");
    
    const root = document.getElementById("root");
    if (existingElement) {
        root.removeChild(existingElement);
    }
    if (bookList.length > 0 && searchField.value) {
        root.insertAdjacentHTML("beforeend", BookList(bookList));
    }
}

"use strict";
/* vad ska vi göra här? */
const booklist = [
    {
        id: 1,
        author: "Charles Dickens",
        title: "Oliver Twist"
    },
    
    {
        id: 2,
        author: "Hamilton",
        title: "Kalle-Anka"
    }
]

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
    /*
    Loopa igenom bookList
    För varje varv i loopen, ta det aktuella elementet (boken)
    Jämför titeln med söktermen
    Om söktermen finns någonstans i titeln, lägg till elementet i ny lista (filteredList)
    Returnerar filteredList eller anropar renderBookList
    
    */
    const filteredList = [];
    if (searchTerm.length > 0) {
        for (let i = 0; i < booklist.length; i++) {
            const title = booklist[i].title.toLowerCase();
            if (title.indexOf(searchTerm.toLowerCase()) >= 0) {
                filteredList.push(booklist[i]);
            }
        }
    }
    
    renderBookList(filteredList)
}

function renderBookList(bookList) {
    /* Element i HTML-listan visas/döljs beroende på listans innehåll. */
    const existingElement = document.querySelector(".book-list");
    if (existingElement) {
        root.removeChild(existingElement);
    }
    if (bookList.length > 0) {
        let html = `<ul class = "book-list rounded-md border-2 border-blue-400 bg-white w-full mx-auto">`
    
                for(let i = 0; i < bookList.length; i++) {
                    html += `<li 
                                class = "book-list_item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
                                ${bookList[i].author} - ${bookList[i].title}
                            </li>`;
                }

            html += `</ul>`;

        const root = document.getElementById("root");

        root.insertAdjacentHTML("beforeend", html);
    }
}
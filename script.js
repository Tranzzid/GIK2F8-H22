"use strict";
/* vad ska vi göra här? */
const booklist = [
    {
        id: 1,
        author: "Charles Dickens",
        title: "Oliver Teist"
    },
    
    {
        id: 1,
        author: "Charles Dickens",
        title: "Oliver Teist"
    }
];
const searchInput = null;

function handleKeyPress(input) {
    /*
    Ta emot/läsa av värdet i inputfältet.
    Sicka värdet till searchBooks.
    searchBooks returnerar en filtrerad liseta.
    Filtrerade lisstan skickas till renderBookList
     */

    searchBooks(input);
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
    for (let i = 0; i < booklist.length; i++) {
        const title = booklist[i].title.toLowerCase();
        if (title.indexOf(searchTerm.toLowerCase()) >= 0) {
            filteredList.push(booklist[0]);
        }
    }
    renderBookList(filteredList)
}

function renderBookList(list) {
    /* Element i HTML-listan visas/döljs beroende på listans innehåll. */
    console.log(list);

}

handleKeyPress("e")
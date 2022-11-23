const url = "https://gik2f8-labs.herokuapp.com/books";

async function getAll() {
    const result = await fetch(url).then((result) => result.json());    
    return result;
}
/* function getAll() {
    return fetch(url)
    .then((result) => result.json())
    .then((jsonData) => jsonData);
} */

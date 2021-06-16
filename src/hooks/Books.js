import React, { useEffect, useState } from "react";
import { getAll, update } from "../Api/BooksAPI";

// meu hook personalizado
export const useBooks = (renderizar) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAll().then(setBooks);
    }, [renderizar]);
    return books;
};

export function changeBook(book, newShelf, renderizar) {
    const res = update(book, newShelf);
    console.log(res);
    return res;
}

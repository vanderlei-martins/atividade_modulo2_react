import React, { useEffect, useState } from "react";
import Helpers_Prateleiras from "../../Helpers/Prateleiras";
import { changeBook, useBooks } from "../../hooks/Books";
import Book from "./Book";

const Shelves = () => {
    const [renderizar, setRenderizar] = useState(false);
    const [organizedBooksOnShelves, setOrganizedBooksOnShelves] = useState([]);

    let books = useBooks(renderizar);
    useEffect(() => {
        const booksOnShelves =
            Helpers_Prateleiras.organizarLivrosEmPrateleiras(books);
        setOrganizedBooksOnShelves(booksOnShelves);
    }, [books]);

    function changeShelfBook(id, shelf) {
        changeBook({id}, shelf);
        setRenderizar(!renderizar);
    }

    return (
        <div>
            {organizedBooksOnShelves.map((shelf) => {
                return (
                    <div className="bg-white w-full h-2/4 p-4 mt-3" key={shelf.nome}>
                        <h2>{shelf.nome}</h2>
                        <div className="flex p-4 mt-3">
                            {shelf.books.map((book) => {
                                return (
                                    <Book
                                        id={book.id}
                                        title={book.title}
                                        authors={book.authors}
                                        alterarStatusDoLivro={changeShelfBook}
                                        key={book.id}
                                        status={book.shelf}
                                        linkImg={book.imageLinks.smallThumbnail}
                                    />
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Shelves;

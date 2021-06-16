import React, { useEffect, useState } from "react";
import { changeBook, useBooks } from "../../hooks/Books";
import Book from "./Book";

const SearchBusca = () => {
    const [renderizar, setRenderizar] = useState(false);
    let books = useBooks(renderizar);
    let [filterbooks, setFilterBooks] = useState(books);

    const booksToShow = filterbooks ? filterbooks : books;

    useEffect(() => {
        console.log("here");
    }, [booksToShow]);

    function filtrarBooks(e) {
        let busca = e.target.value;
        let newBooks = books.filter((book) => {
            let pos = book.title.toLowerCase().indexOf(busca.toLowerCase());
            return pos != -1;
        });

        console.log(newBooks);
        setFilterBooks(newBooks);
    }

    function changeShelfBook(id, shelf) {
        changeBook({ id }, shelf);
        setRenderizar(!renderizar);
    }

    return (
        <div className="App">
            <h1>Buscar por livros: </h1>
            <div className="p-8">
                <div className="bg-white flex items-center rounded-full shadow-xl">
                    <input
                        className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                        id="search"
                        type="text"
                        placeholder="Search"
                        onChange={filtrarBooks}
                    />
                </div>
            </div>
            <div className="bg-white w-full h-2/4 p-4">
                <div className="flex p-4">
                    {booksToShow.map((book) => {
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
        </div>
    );
};

export default SearchBusca;

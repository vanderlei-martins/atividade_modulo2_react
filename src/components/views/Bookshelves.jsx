import React from 'react';
import Shelves from './Shelves';

const BookShelves = () => {
    return(
        <div className="m-1">
            <div className="row center"><h1 className="text-align-cert">Minhas Leituras</h1></div>
            <Shelves />
        </div>
    );
}

export default BookShelves;
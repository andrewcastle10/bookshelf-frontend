import React from 'react';

export default function BookItem({book}){

    return (
        <div>
            <li>
                {book.title}
            </li>
            <img src={book.url} alt={book.title}/>
        </div>

    )

}
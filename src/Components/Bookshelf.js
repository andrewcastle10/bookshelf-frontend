import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import BookItem from './BookItem';

export default function Bookshelf(){

    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('');


    function submitSearch(){
        // console.log(search);
        fetch("/search", {
          method: "POST",
          headers: {
            'Content-Type' : 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify([search])
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            setBooks(data);
            console.log(books);
        });

      }

    // Handling the name change
    const handleSearch = (e) => {
        // console.log(e.target.value);
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitSearch();
      };

    
    return (
        <div>   
            <TextField required fullWidth id="search" label="Search"
            variant="outlined" size="small" onChange={handleSearch}/>

            <Button variant="contained" onClick={handleSubmit} >Submit</Button>
            <h1> This is a component! </h1>

            <ul>
            {books.map((book, id) => {
                console.log(book.title);
                return (
                    <BookItem book={book} key={id}/>
                )
            })}
            </ul>

            <h2> TEST </h2>
            
 
        </div>

    )

}
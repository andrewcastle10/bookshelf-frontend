import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Bookshelf(){

    const [fetchLink, setFetchLink] = useState('/test')
    const [data, setData] = useState('')
    const [search, setSearch] = useState('');


    function submitSearch(){
        // console.log(search);
        fetch("/search", {
          method: "POST",
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify([search])
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });

      }
    
    useEffect(() => {
        console.log(fetchLink);
        fetch(fetchLink).then(response=>
          response.json().then(res => {
            console.log(res);
            setData(res[0]);
          })
    
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [fetchLink]);

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

            <h2> {data} </h2>

        </div>

    )

}
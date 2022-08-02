import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';

export default function Bookshelf(){

    const [fetchLink, setFetchLink] = useState('/test')
    const [data, setData] = useState('')
    const [search, setSearch] = useState('');


    useEffect(() => {
        console.log(fetchLink);
        fetch(fetchLink).then(response=>
          response.json().then(res => {
            console.log(res);
            setData(res);
          })
    
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [fetchLink]);

    // Handling the name change
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div>   
            <TextField required fullWidth id="search" label="Search"
            variant="outlined" size="small" onChange={handleSearch}/>
            <h1> This is a component! </h1>

            <h2> {data} </h2>

        </div>

    )

}
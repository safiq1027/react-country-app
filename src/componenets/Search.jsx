/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

const Search = (props) => {

    const [searchText,setSearchText] = useState("")

    const handleChange = (e)=>{
        setSearchText(e.target.value)
        
    }
    useEffect(()=>{
        props.onSearch(searchText);
    }, [searchText])
  return (
    <div style={{textAlign:"center"}}>
        <input type="text" placeholder='Search Country' value={searchText} onChange={handleChange} />
      
    </div>
  )
}

export default Search

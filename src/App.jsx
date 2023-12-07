// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Countries from './componenets/Countries';
import "./App.css"
import Search from './componenets/Search';


const url="https://restcountries.com/v3.1/all";
const App = () => {

  const [isLoding,setIsLoading]=useState(true);
  const [error,setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [countries,setCountries] = useState([])
  const [filteredCountries, setFilteredCountries]=useState(countries);

  const fetchData = async (url)=>{
    setIsLoading(true);

   try{
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setFilteredCountries(data)
    setIsLoading(false);
    setError(null);
   }catch(error){
    setIsLoading(false)
    setError(error)
   }
    
  }

  useEffect(()=>{
    fetchData(url)

  }, [])

  const handleRemoveCountry = (name)=>{
   
    const filter=filteredCountries.filter((country)=>country.name.common!==name)
    setFilteredCountries(filter)
  }

  const handleSearch = (searchValue)=>{
    let value=searchValue.toLowerCase();
    const newCountries = countries.filter((country)=>{
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value)
    })
    setFilteredCountries(newCountries)
  }
  return (
    <>
      <h1> Country App</h1>
      <Search onSearch={handleSearch} />
      {isLoding && <h3>Loading...</h3>}
      {error && <h3>{error.message}</h3>}
      {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry} />}
      
      
      
    </>
  )
}

export default App

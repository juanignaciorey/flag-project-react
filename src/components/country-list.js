import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Country from './country';

const CountryListStyled = styled.div`
    display: grid;
    grid-row-gap: 2.3em;
    background: var(--background);
    border: 1px solid red;
    justify-content: center;
    padding: 4em 2em;
`;  

function CountryList() {
    
    const [countryList, setCountryList] =  useState([])
    
    useEffect( ()=> {
        fetch('https://restcountries.eu/rest/v2/all')
        .then((response)=>{
            return response.json()
        })
        .then((data) => {
            console.log(data)
            setCountryList(data)
        })
        .catch(()=>{
            console.log('hubo un error, que dolor que dolor que pena')
        })
    }, []);

    return (
        <CountryListStyled>
            {
                countryList.map(({ name, flag, population, region, capital }) => {
                    return(
                        <Country
                            flag={flag}
                            name={name}
                            key={name}
                            population={population}
                            region={region}
                            capital={capital}
                        />
                    )
                })
            }
        </CountryListStyled>
    )
}

export default CountryList

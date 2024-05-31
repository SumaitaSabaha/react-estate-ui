import './searchBar.scss'
import { useState } from 'react'

function SearchBar(){
    return (
        <div className='searchBar'>
            <form action="">
                <input type="text" name="location" placeholder="City Location"></input>
                <input type="number" name="minPrice" min={0} max={1000000} placeholder="Min Price"></input>
                <input type="number" name="maxPrice" min={0} max={1000000} placeholder="Max Price"></input>
                <button>
                    <img src="./search.png"/>
                </button>
            </form>
        </div>
    )
}

export default SearchBar
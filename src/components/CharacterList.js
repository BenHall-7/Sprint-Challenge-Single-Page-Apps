import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  const [page, setPage] = useState("https://rickandmortyapi.com/api/character/");
  const [characters, setCharacters] = useState([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  const [filter, setFilter] = useState({
    name: "",
    type: "",
    status: "",
    species: "",
    gender: "",
    caseSensitive: false,
  })
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    Axios.get(page)
      .then(res => {
        setCharacters(res.data.results);
        let info = res.data.info;
        setNext(info.next);
        setPrev(info.prev);
      })
      .catch(console.error);
  }, [page]);

  return (
    <section className="character-list">
      <div className="character-page-buttons">
        <button disabled={prev.length === 0}
          onClick={() => {setPage(prev)}}>Previous Page</button>

        <button className="filter-button" onClick={() => setShowFilter(!showFilter)}>Toggle Filter</button>
        
        <button disabled={next.length === 0}
          onClick={() => {setPage(next)}}>Next Page</button>
      </div>
      {showFilter && 
        <SearchForm {...filter} setFilter={setFilter}/>
      }
      {
        characters
          .filter(c => {
            let params = ["name", "type", "status", "species", "gender"];
            if (showFilter) {
              for (let p of params) {
                if (filter[p] && filter[p].length > 0) {
                  // check for case sensitivity
                  if (filter.caseSensitive) {
                    if (!c[p] || !c[p].includes(filter[p])) {
                      return false;
                    }
                  } else if (!c[p] || !c[p].toLowerCase().includes(filter[p].toLowerCase())) {
                    return false;
                  }
                }
              }
            }
            return true;
          })
          .map(c => <CharacterCard character={c} key={c.id}/>)
      }
    </section>
  );
}

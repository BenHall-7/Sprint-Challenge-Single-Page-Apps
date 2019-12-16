import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

const BASE_CHARACTER_URL = "https://rickandmortyapi.com/api/character/";

export default function CharacterList() {
  const [page, setPage] = useState(BASE_CHARACTER_URL);
  const [characters, setCharacters] = useState([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  const [filter, setFilter] = useState({
    name: "",
    type: "",
    status: "",
    species: "",
    gender: "",
  });
  const setFilterWrapper = input => {
    setFilter(input);
    let url = BASE_CHARACTER_URL;
    let queries = [];
    for (let key in input) {
      if (input[key].length > 0) {
        queries.push({
          key: key,
          value: input[key]
        });
      }
    }
    queries.forEach((q, ind) => {
      if (ind == 0) {
        url += "?" + q.key + "=" + q.value;
      } else {
        url += "&" + q.key + "=" + q.value;
      }
    })
    setPage(url);
  }
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
        <SearchForm {...filter} setFilter={setFilterWrapper}/>
      }
      {characters.map(c => <CharacterCard character={c} key={c.id}/>)}
    </section>
  );
}

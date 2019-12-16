import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState("https://rickandmortyapi.com/api/character/");
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");

  useEffect(() => {
    Axios.get(page)
      .then(res => {
        setCharacters(res.data.results);
        let info = res.data.info;
        setNext(info.next);
        setPrev(info.prev);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="character-list">
      <button disabled={prev.length === 0}
        onClick={() => {setPage(prev)}}>Previous Page</button>
      <button disabled={next.length === 0}
        onClick={() => {setPage(next)}}>Next Page</button>
      {characters.map(c => <CharacterCard character={c} key={c.id}/>)}
    </section>
  );
}

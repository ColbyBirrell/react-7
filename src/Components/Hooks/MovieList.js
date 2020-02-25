import React, { useState } from "react";
import styleHoc from "../HOCS/styleHoc";

const MovieList = props => {
  const [movies, setMovies] = useState(["Ford v. Ferrari", "Toy Story"]);
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>Movie List</h1>
      {movies.map(element => {
        return <h2>{element}</h2>;
      })}
      <input onChange={event => setInput(event.target.value)} />
      <button style={props.style} onClick={() => setMovies([...movies, input])}>
        Take me to the Movies (list), Baby!!!
      </button>
    </div>
  );
};

export default styleHoc(MovieList);

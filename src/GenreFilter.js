import React from 'react'

function GenreFilter({ genres, onGenreSelect }) {
  return (
    <div className="genre-filter">
      <h2 className="App-title1">Filter by Genre</h2>
      <div className='btns'>
      {genres.map((genre, index) => (
       <button style={{marginLeft:"5px",marginRight:"5px"}} key={index} onClick={() => onGenreSelect(genre)}>
          {genre}
        </button>
      ))}
      </div>
      <br/>
    </div>
  )
}

export default GenreFilter
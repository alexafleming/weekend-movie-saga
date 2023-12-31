import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function Details() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(store => store.movieDetail)
    const movieGenres = useSelector(store => store.genres)
    const history = useHistory();
    
    useEffect(() => {
        dispatch({type: 'FETCH_DETAILS', payload: id })
        dispatch({type: 'FETCH_GENRES', payload: id })

    }, []);

    const backButton = () => {
        history.push(`/`)
    };

    return (
      <div>
        <h3>{movie.title}</h3>
        {movieGenres.map(genre => {
                    return (
                        <div key={genre.id} >
                            <p>{genre.name}</p>
                        </div>
                    );
                })}
        <img src={movie.poster}/>
        <p>{movie.description}</p>
        <button onClick={() => backButton()}>back</button>
      </div>
    );
  }
  
  export default Details;
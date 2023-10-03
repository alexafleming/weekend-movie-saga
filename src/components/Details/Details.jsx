import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function Details() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(store => store.movieDetail)
    
    useEffect(() => {
        dispatch({type: 'FETCH_DETAILS', payload: id })
    }, []);

    return (
      <div>
        <h2>Details</h2>
        <p>{movie.title}</p>
        <img src={movie.poster}/>
        <p>{movie.description}</p>
      </div>
    );
  }
  
  export default Details;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


function Details() {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({type: 'FETCH_DETAILS', payload: id })
    });

    return (
      <div>
        <h2>Details</h2>
        <p>Movie ID: {id}</p>
      </div>
    );
  }
  
  export default Details;
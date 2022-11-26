import React, { useState,useEffect } from 'react'
import { getMatchDetail } from './api';
import { useParams } from 'react-router-dom';

const Singledata = () => {
    const [singlematch,setsinglematch]=useState({})
    const { id } = useParams();

    useEffect(() => {
        if (id) {
          // console.log(musicRecords)
          console.log(id)
     
        let matchDetail= getMatchDetail(id)
        setsinglematch(matchDetail)
// getMatchDetail(id)
// .then((res)=>console.log(res))
}
console.log(singlematch)
      }, [id]);
  return (
    <div>

    </div>
  )
}

export default Singledata
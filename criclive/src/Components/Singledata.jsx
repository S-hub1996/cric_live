import React, { useState,useEffect } from 'react'
import { getBBB, getMatchDetail } from './api';
import { useParams } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
import SingleCard from './SingleCard';

const Singledata = () => {
    const [singlematch,setsinglematch]=useState({})
    const [bbb,setBBB]=useState({})
    const { id } = useParams();

    useEffect(() => {
        if (id) {
          getMatchDetail(id)
          .then((data) => {
            console.log(data);
            setsinglematch(data);
          })
        .catch((error) => {});


        getBBB(id)
        .then((data) => {
          console.log(data);
          setBBB(data);
        })
      .catch((error) => {});


      }

      console.log(singlematch) 
      console.log(bbb) 
      }, [id]);
  return (
    <div>

<SingleCard match={singlematch}/>

    </div>
  )
}

export default Singledata
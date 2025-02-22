// src/pages/AuctionDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AuctionDetails() {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);

  useEffect(() => {
    axios.get(`/api/auctions/${id}`).then(response => setAuction(response.data));
  }, [id]);

  if (!auction) return <p>Loading...</p>;

  return (
    <div className='container'>
      <h1>{auction.title}</h1>
      <p>{auction.description}</p>
      <p>Starting bid: ${auction.startingBid}</p>
    </div>
  );
}

export default AuctionDetails;
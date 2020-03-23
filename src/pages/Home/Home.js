import React from 'react';
import './Home.css';
import Trending from '../../components/trending/Trending';

const Home = () => {
  return (
    <div id="home">
      {/* <Loading isVisible={loading} /> */}
      <Trending />
    </div>
  )
}

export default Home;
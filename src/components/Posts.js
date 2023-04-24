import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core/';
import AllPosts from './AllPosts';

const styles = {
  grid: {
    display: 'flex',
    justifyContent: 'center',
  },
};

function Posts() {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      let response = await axios.get(`https://dummyjson.com/posts`);
      console.log(response.data);
      setAllPosts(response.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="postGridContainer">
     <h1 className="justify-content-center align-item-center"
      style={{color: 'white', backgroundColor: 'black',
      textAlign: 'center', paddingTop: '20px'}}>YOUR POSTS</h1>
      <Grid container spacing={2} sx={styles.grid}>
        {Array.isArray(allPosts) &&
          allPosts.map((item) => {
            return <AllPosts key={item.id} data={item} />;
          })}
      </Grid>
    </div>
  );
}

export default Posts;

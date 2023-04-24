import React, { useState } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Comments = (props) => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {props.data.posts.userId} from {props.data.tags[0]}
      </Typography>
      <Button onClick={handleLikeClick}>Like</Button>
      <CardActions>{likes}</CardActions>
    </CardContent>
  );
};

export default Comments;

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Card, CardHeader, CardMedia, CardContent, CardActions, Collapse,
  Avatar, IconButton, Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Styled ExpandMore icon for toggling collapse
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({  
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

export default function RecipeReviewCard({ posts }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {posts.map((post) => (
        <Card key={post._id} sx={{ maxWidth: 495, marginBottom: '20px' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {post.userid.charAt(0).toUpperCase()} {/* Display first letter of user ID */}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={`Post by User: ${post.userid}`}
            subheader={new Date().toLocaleDateString()} // Display current date
          />
          {post.image && (
            <CardMedia
              component="img"
              height="194"
              image={`data:image/jpeg;base64,${post.image}`} // Use Base64 image
              alt="Post image"
            />
          )}
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {post.desc}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Additional Info:</Typography>
              <Typography paragraph>
                This post was created by user <strong>{post.userid}</strong>.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}

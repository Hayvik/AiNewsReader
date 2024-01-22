import React from 'react'
import {Card , CardActions,CardActionArea, CardContent, CardMedia,  Button,Typography} from '@mui/material';


// The destructuring assignment syntax ({article:{description,publishedAt,source,title,url,urlToImage} ,index})
//  is used to extract specific properties from the article object passed as a prop. This allows direct access to
//  these properties within the component without having to use props.article.propertyName every time.
// we can also use props.description or props..publishedAt 

const NewsCard = ({article:{description,publishedAt,source,title,url,urlToImage} ,index}) => {
  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderBottom: '10px solid white',
    }}>

      <CardActionArea href={url} target='_blank'>
      {/* it is mandatory to give a contant height in url to image to view it */}
        <CardMedia sx={{height:200}} image={urlToImage ||'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzh6nwo8uxq8Z950-3jpSNHb5Ph0LK3IbKDA&usqp=CAU'}/>
        <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px',
        }}
        >
        {/* Here we are basically creating a data js object which contain the data of publishedAt and convert date to a string because we dont want neither time nor day only date*/}
        <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
          <Typography variant='body2' color='textSecondary' component='h2'>{source.name}</Typography>
        </div>
        <Typography gutterBottom variant='h5'
        sx={{
          padding: '0 16px',
        }}
        >{title}</Typography>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>{description}</Typography>
        </CardContent>

      </CardActionArea>

      <CardActions sx={{
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Button size='small' color='primary'>Learn More</Button>
        <Typography variant='h5' color='textSecondary'>{index+1}</Typography>
      </CardActions>
    </Card>
    

  )
}

export default NewsCard
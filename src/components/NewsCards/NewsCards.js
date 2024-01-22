import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import { Grow, Typography, Grid} from '@mui/material'
import '../../styles.css'

// import  useStyles  from './Styles.js';

//created a infocard array for showing user directions to use application
//then we map elements and show it inside card
const infoCards = [
  { color: '#45CFDD', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#9681EB', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
  { color: '#6527BE', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
  { color: '#FF8989', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];
const NewsCards = ({articles}) => {
  
//we also want to create use use directions to use alan
// so articles.length is 0 then only show instruction cards
if(!articles.length){
  return(
    <> 
    {/* we give css of spinner  */}
    <div className="spinner">
    
    </div>
    <a href='https://alan.app/' target='_blank' rel='noreferrer' text=''>
    <button className="btn" href='alan.app'>
        ALAN AI
    </button>
    </a>
<Grow in>

  <Grid container alignItems="stretch" spacing={3} sx={{ padding: '0', margin: '0 3%', width: '98%', marginLeft: '5px', marginRight: '5px' }}>
    {infoCards.map((infoCard) => (
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <div style={{
          width: '100%',
          padding: '10%',
          height: '45vh',
          borderRadius: '30px',
          boxShadow: '15px 15px 30px #bebebe, -15px -15px 30px #ffffff',
          backgroundColor: infoCard.color,
          justifyContent:'space-between'
        }}>
          <Typography variant='h5'>{infoCard.title}</Typography>
          {infoCard.info ? (
            <Typography variant='h6'>
            {/* showing the thrid element of title here */}
              <strong>{infoCard.title.split(' ')[2]}:</strong> {infoCard.info} 
            </Typography>
          ) : null}
          <Typography variant='h6'>Try saying:<br /><i>{infoCard.text}</i></Typography>
        </div>
      </Grid>
    ))}
  </Grid>
</Grow>
</>
  );
}



  return (
    
    
    // in	bool		If true, the component will transition in.
    <Grow in>

{/* Grid uses CSS's Flexible Box module for high flexibility.
There are two types of layout: containers and items.
grid documentation for my future reference : https://mui.com/material-ui/react-grid/ */}

  {/* here 12 is the max with of grid so in xs devices only 1 card will be shown and in sm 6 in md 3 and in lg 4 */}
 
  <Grid sx={{padding:'0',
            margin:'0 3%',
            width:'98%',
            marginLeft: '5px',  // Add this line
            marginRight: '5px' 
            }}  
  container alignItems="stretch" spacing={3} >

      {/* if articles are present then only run map function */}
      {/* here we are actually mapping all the card elements and then sending it to 
      NewsCard component as a prop one by one using map  */}

      {articles && articles.map((article, index) => (   
        <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
          <NewsCard article={article} index={index} />

        </Grid>
      ))}
    </Grid>
    
  </Grow> 
        
  )

      
}

export default NewsCards
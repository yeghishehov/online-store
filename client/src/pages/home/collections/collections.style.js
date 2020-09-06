import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // justifyContent: 'space-between',
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
      
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    height: 110,
    marginBottom: 60,
  },
  typography: {

  },
  link: {
    textDecoration: 'none',
    color: 'blue',
    paddingBottom: 5, 
    borderBottom: '1px solid blue',
    fontWeight: 500,
    '&:hover': {
      borderBottom: '1px solid black',
      color: 'black',
    },
  },

  card: {
    maxWidth: 400,
    width: 400,
    marginBottom: 50,
    boxShadow: 'none',
    '&:hover': {
      '& hr': {
        borderBottom: '1px solid black',
      },
      '& $media': {
        opacity: 0.7,
      },
    },
    
  },
  media: {
    height: 200,
    width: 300,
    margin: 'auto',
  },
  typography: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
    margin: 'auto',   
  },
  items: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  hr: {
    border: '1px solid white',
  }
}));
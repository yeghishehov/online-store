import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // justifyContent: 'space-between',
    marginBottom: 10,
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

}));
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 350,
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      
    },
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  text: {
    marginBottom: 10,
    color: '#fff',
  },
  link: {
    textDecoration: 'none',
    color: '#626262',
    paddingBottom: 5, 
    borderBottom: '1px solid #000',
    '&:hover': {
      borderBottom: '1px solid #fff',
    },
  }
}));
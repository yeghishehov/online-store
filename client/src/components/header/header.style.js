import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 70,
    paddingRight: 70,  
    fontSize: 16,
    borderBottom: '1px solid #ddd',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexDirection: 'column',
      height: '10px',
    },
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '60%',

  },
  logo: {
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 150,
    fontSize: 30
  }
}));
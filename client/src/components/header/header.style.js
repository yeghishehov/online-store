import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    margin: 'auto',
    fontSize: 17,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexDirection: 'column',
      height: '10px',
    },
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 770,

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
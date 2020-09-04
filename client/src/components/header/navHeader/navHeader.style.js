import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 350,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexDirection: 'column',
      height: '10px',
    },
  },
  link: {
    textDecoration: 'none',
  }
}));
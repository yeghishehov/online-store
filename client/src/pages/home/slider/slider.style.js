import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // justifyContent: 'space-between',
    marginBottom: 120,
    [theme.breakpoints.down('sm')]: {
    },
  },
  active: {
    display: 'inline',
  },
  hidden: {
    display: 'none',
  },
  control: {
    marginTop: -50,
    textAlign: 'center',
  },
  slide: {
    
  },
  img: {
    width: '100%',
  },
}));
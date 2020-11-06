import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
    margin: 'auto',

    [theme.breakpoints.down('sm')]: {

    },
  },
  heading: {
    textAlign: 'center',
  }

}));
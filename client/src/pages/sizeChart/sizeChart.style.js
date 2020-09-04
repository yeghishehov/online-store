import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 80,

    [theme.breakpoints.down('sm')]: {

    },
  },
  heading: {
    textAlign: 'center',
  }

}));
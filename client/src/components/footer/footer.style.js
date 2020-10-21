import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    background: '#000',
    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.down('sm')]: {
    },
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 700,
    marginBottom: 10,
  },
  info: {
    color: '#fff',
    marginBottom: 50,
  },
  address: {
    color: '#626262',
  },
}));

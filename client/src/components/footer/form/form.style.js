import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexDirection: 'column',
    marginBottom: 50,
    [theme.breakpoints.down('sm')]: {
    },
  },
  input: {
    width: 600,
    height: 40,
    color: '#fff',
    borderBottom: '2px solid blue',
  },
  floatingLabelFocusStyle: {
    color: '#626262',
  },
  button: {
    width: 40,
    height: 40,
  },
  text: {
    marginTop: 20,
    color: '#626262',
  }
}));
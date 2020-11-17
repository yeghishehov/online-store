import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 50,
    // [theme.breakpoints.down('sm')]: {
    // },
  },
  input: {
    width: '30%',
    margin: 30,
    marginTop: 10,
    
    // justifyContent: 'center'
    // alignItems: 'center'
    // height: 500,
  },
  textField: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 90,
    margin: 20,
  },
  buttons: {
    height: 120,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  signIn: {
    color: '#212529',
    fontSize: '1rem',
    fontWeight: '400',
    padding: '5px 15px',
    '&:hover': {
      color: '#fff',
      background: '#557b97',
    }
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    '&:hover': {
      color: '#69727b',
      textDecoration: 'underline',
    }
  },
  checkboxContainer: {
    marginLeft: 10,
  }
}));
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

}));
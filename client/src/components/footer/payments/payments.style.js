import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // justifyContent: 'space-between',
    // width: 350,
    marginBottom: 20,
    [theme.breakpoints.down('sm')]: {
      
    },
  },
  icons: {
    display: 'flex',
  },
  icon: {
    margin: 3,
    height: 50,
    width: 50    
  },
  text: {
    marginBottom: 20,
    color: '#fff',
  },
}));
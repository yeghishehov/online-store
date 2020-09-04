import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
    marginTop: 30,
    marginBottom: 80,
    textAlign: 'center',
    
    [theme.breakpoints.down('sm')]: {
      
    },
  },
  heading: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 400,
  }

}));
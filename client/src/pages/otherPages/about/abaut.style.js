import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
    margin: 'auto',
    marginBottom: 80,
    marginTop: 40,

    [theme.breakpoints.down('sm')]: {

    },
  },
  heading: {
    textAlign: 'center',
  },
  heading2: {
    fontWeight: 700,
  },
  end: {
   width: 417,
   textAlign: "center"
  },

}));
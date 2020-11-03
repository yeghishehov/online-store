import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 70,
    paddingRight: 70,  
    fontSize: 16,
    borderBottom: '1px solid #ddd',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexDirection: 'column',
      height: '10px',
    },
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '60%',

  },
  logo: {
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 150,
    fontSize: 30,
    marginTop: 5,
  },
  link: {
    textDecoration: 'none',
    color: "#000",
    textAlign: "center",
  },
  ordersCounts: {
    fontSize: 16,
    position: 'relative',
    top: -23,
  },
  name: {
    fontSize: 16,
    marginTop: -10,
    marginBottom: 5,
  }
}));
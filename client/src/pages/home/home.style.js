import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      
    },
  },
  typography: {

  },
  collectionManWoman: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: 700,
    background: `url(${"https://cdn.shopify.com/s/files/1/1241/4530/files/nuevo_chica_1.jpg"}) 100% 100% no-repeat`,
    backgroundSize: '100%',
  },
  link: {
    textDecoration: 'none',
    paddingTop: 200,
    fontSize: 24,
    fontWeight: 500,
    color: '#fff',
    borderBottom: '1px solid #fff',
    '&:hover': {
      borderBottom: '1px solid #bbb',
      color: '#bbb'
    },
  },
  space: {
    width: 100,
    height: 100,
  }
}));
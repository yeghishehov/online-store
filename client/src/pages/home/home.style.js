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
    width: '100%',
    height: 700,
    background: `url(${"https://cdn.shopify.com/s/files/1/1241/4530/files/nuevo_chica_1.jpg"}) 100% 100% no-repeat`,
    backgroundSize: '100%',
  },
  link: {
    textDecoration: 'none',
    fontSize: 21,
    fontWeight: 500,
    color: '#fff',
    borderBottom: '1px solid #fff',
    '&:hover': {
      borderBottom: '1px solid #ccc',
      color: '#ccc'
    },
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: 200,
    height: 300,
  },
  heroInner: {
    background: `url(${"https://cdn.shopify.com/s/files/1/1241/4530/files/New_Home_v211_1500x_e73cf390-c6a7-453e-9b1f-8e506fcc1c0b.jpg"}) no-repeat`,
    backgroundSize: '100%',
    height: 470,
    marginTop: -140
  },
  textContainer: {
    display: 'flex',
    width: '100%',
    height: 400,
    background: '#000',
    marginTop: -25
  },
  text1: {
    width: '40vw',
    fontSize: 35,
    fontWeight: 400,
    color: '#fff',
    paddingTop: 100,
    paddingLeft: 50,
  },
  text2: {
    width: '42vw',
    fontSize: 21,
    color: '#aaa',
    paddingTop: 110,
    paddingLeft: 100,
  },
  hashtag: {
    color: 'blue',
    marginTop: 20,
  },
  collectionAccessories: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    minHeight: '86vh',
  },
  accessories: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    background: `url(${"https://cdn.shopify.com/s/files/1/1241/4530/files/MUROEXE-MOCHILAS-AMARILLA-01_36d91dca-007c-4d67-a1e7-1fdc952031be.jpg"}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    width: '49.25vw',
    minHeight: '85vh',
    color: '#fff',
  },
  clothing: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    background: `url(${"https://cdn.shopify.com/s/files/1/1241/4530/files/TEXTIL.png"}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    width: '49.25vw',
    minHeight: '85vh',
    color: '#fff',
  },
  accessText: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 50,
    paddingBottom: 50,
    fontSize: 64,
  },
  instashop: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  img: {
    height: 216,
    width: 216,
  },
  grow: {
    flexGrow: 1,
    height: 433,
    width: 433,
    background: `url(${"https://m.photoslurp.com/i/fit?width=720&height=720&url=https%3A%2F%2Fstorage.googleapis.com%2Fpslurpmedia%2Finstagram-business%2F17860360942911146_0.jpg"})  no-repeat`,
    backgroundSize: 'cover',
  },
  square: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 433,
    width: 433,
  }
}));
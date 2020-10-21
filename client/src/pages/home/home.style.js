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
    // alignItems: 'center',
    width: '100%',
    height: 700,
    background: `url(${'https://cdn.shopify.com/s/files/1/1241/4530/files/nuevo_chica_1.jpg'}) 100% 100% no-repeat`,
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
      color: '#ccc',
    },
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: 200,
    height: 500,
  },
  heroInner: {
    background: `url(${'https://cdn.shopify.com/s/files/1/1241/4530/files/New_Home_v211_1500x_e73cf390-c6a7-453e-9b1f-8e506fcc1c0b.jpg'}) no-repeat`,
    backgroundSize: '100%',
    height: 470,
    marginTop: -140,
  },
  textContainer: {
    display: 'flex',
    width: '100%',
    height: 400,
    background: '#000',
    marginTop: -25,
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
    background: `url(${'https://cdn.shopify.com/s/files/1/1241/4530/files/MUROEXE-MOCHILAS-AMARILLA-01_36d91dca-007c-4d67-a1e7-1fdc952031be.jpg'}) no-repeat`,
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
    background: `url(${'https://cdn.shopify.com/s/files/1/1241/4530/files/TEXTIL.png'}) no-repeat`,
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
  imgContainer: {
    display: 'grid',
    gridTemplateAreas: `'img1 img2 img3 img3 img4 img5'
                        'img6 img7 img3 img3 img8 img9'`,
    justifyContent: 'center',
    background: '#000',
    cursor: 'pointer',
    height: 433,
    '&:hover $imgCenter': {
      transform: 'scale(1.05)',
    },
  },
  img: {
    height: 216,
    width: 216,
    opacity: 0.9,
  },
  imgCenter: {
    height: 429,
    width: 432,
    transition: '5s',
    opacity: 0.6,
  },
  instashop: {
    color: 'white',
    position: 'absolute',
    marginLeft: 160,
    marginTop: 190,
    border: '2px white solid',
    padding: 10,
    fontWeight: '500',
    zIndex: 10,
    transition: '.5s',
    '&:hover': {
      transform: 'scale(1.05)',
      background: '#000',
    },
  },
  imgWrap1: {
    gridArea: 'img1',
    overflow: 'hidden',
  },
  imgWrap2: {
    gridArea: 'img2',
    overflow: 'hidden',
  },
  imgWrap3: {
    gridArea: 'img3',
    overflow: 'hidden',
  },
  imgWrap4: {
    gridArea: 'img4',
    overflow: 'hidden',
  },
  imgWrap5: {
    gridArea: 'img5',
    overflow: 'hidden',
  },
  imgWrap6: {
    gridArea: 'img6',
    overflow: 'hidden',
  },
  imgWrap7: {
    gridArea: 'img7',
    overflow: 'hidden',
  },
  img8: {
    gridArea: 'img8',
    overflow: 'hidden',
  },
  imgWrap9: {
    gridArea: 'img9',
    overflow: 'hidden',
  },
}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // justifyContent: 'space-between',

    [theme.breakpoints.down('sm')]: {

    },
  },
  active: {
    display: 'inline',
  },
  hidden: {
    display: 'none',
  },

}));
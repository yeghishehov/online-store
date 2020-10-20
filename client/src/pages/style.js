import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        display: 'flex',
    },
    formColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyDontent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    inputText: {
        width: 500,
        marginTop: 30,
    },
    fab: {
        margin: 40,
    },
    submit: {
        margin: 10,
    },
}));
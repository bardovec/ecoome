import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        height: '10%',

    },
    card: {
        display: 'flex',
        // alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '15px',

    },
    cardInfo: {
        display: "flex",
       flexDirection:"column",
        alignItems: 'flex-start',
        padding: '15px'
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
});

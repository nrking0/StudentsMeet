import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        margin: 'auto',
        color: 'grey',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '2.5rem'
    }
});

const Footer = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <p>&copy; Nick King | Daniel Rugutt | Amit Sawhney </p>
        </div>
    );
}

export default Footer;
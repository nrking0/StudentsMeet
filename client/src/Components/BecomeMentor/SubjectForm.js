import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, MenuItem, Select, Dialog, Paper, Grid, FormControl, Input, TextField } from '@material-ui/core/'

const useStyles = makeStyles({
    root: {
        marginTop: '40px',
        width: '80%',
        margin: 'auto',
    },
    space: {
        paddingRight: '10px'
    },
    paper: {
        // padding: '20px',
    },
    header: {
        backgroundColor: '#ECA190',
        color: 'black',
        fontSize: '25px',
        textAlign: 'center',
        padding: '10px',
        fontWeight: 'bold',
        marginTop: '20px',
    },
    content: {
        width: '95%',
        margin: 'auto',
        margin: 'auto',
        textAlign: 'center'
    },
    button: {
        marginTop: '10px'
    }
});

const SubjectForm = (props) => {
    const classes = useStyles();
    const [subjects, setSubjects] = useState([{}]);

    const subjectHtml = (<Select defaultValue="default">
        <MenuItem disabled value="default">Select a subject ...</MenuItem>
        <MenuItem value="math">Mathematics</MenuItem>
        <MenuItem value="chemistry">Chemistry</MenuItem>
        <MenuItem value="compSci">Computer Science</MenuItem>
        <MenuItem value="bio">Biology</MenuItem>
        <MenuItem value="socSci">Social Sciences</MenuItem>
        <MenuItem value="english">English/Writing</MenuItem>
        <MenuItem value="language">Foreign Language</MenuItem>
    </Select>);

    const addSubject = e => {
        
    }

    

    return (
        <div className={classes.root}>
            {/* <Paper className={classes.paper}> */}
            <FormControl fullWidth>

                <div className={classes.content}>
                    {}
                    {subjectHtml} <br />
                    {/* <Button onClick={} fullWidth color="primary" variant="contained" className = {classes.button}>Add Subject</Button> */}
                </div>
            </FormControl>
            {/* </Paper> */}
        </div>
    );
}

export default SubjectForm;

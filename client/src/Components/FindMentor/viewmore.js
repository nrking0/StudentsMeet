import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Grid } from '@material-ui/core'
import { AiOutlineMail } from 'react-icons/ai';
import "./view.css";

export default function Viewmore(props) {
    const getMentors = async () => {
        try {
            const response = await fetch(`/mentors/${props.id}`);
            const jsonData = await response.json();
            console.log(jsonData);
            setMentors(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    }

    const [mentors, setMentors] = useState("");


    useEffect(() => {
        getMentors();
    }, []);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    var gradeChange;
    if (mentors.grade === 9) {
        gradeChange = "High School Freshman";
    } else if (mentors.grade === 10) {
        gradeChange = "High School Sophomore";
    } else if (mentors.grade === 11) {
        gradeChange = "High School Junior";
    } else if (mentors.grade === 12) {
        gradeChange = "High School Senior";
    } else if (mentors.grade === 13) {
        gradeChange = "College Freshman";
    } else if (mentors.grade === 14) {
        gradeChange = "College Sophomore";
    } else if (mentors.grade === 15) {
        gradeChange = "College Junior";
    } else if (mentors.grade === 16) {
        gradeChange = "College Senior";
    }
    var yearAmount;
    if(mentors.years === 1){
        yearAmount = "year"
    } else {
        yearAmount = "years"
    }


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Learn more
          </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="md"
                fullWidth
            >
                <div style={{ margin: 'auto', fontSize: '42px', padding: '3%' }}>
                    {mentors.fname} {mentors.lname}
                </div>
                <DialogContent>
                    <Grid container>
                        <Grid item xs style={{textAlign:'center'}}>
                        <h1 style={{margin:'10px', padding:'0'}}>About me</h1>
                            <DialogContentText id="alert-dialog-description">
                                Bio: {mentors.bio}
                            </DialogContentText>
                            <DialogContentText id="alert-dialog-description">
                                {gradeChange}
                            </DialogContentText>
                            <DialogContentText id="alert-dialog-description">
                                I have mentored for {mentors.years} {yearAmount}.
                            </DialogContentText>
                            <DialogContentText id="alert-dialog-description">
                                Subject I want to mentor in: {mentors.interestedsubjects}
                            </DialogContentText>

                        </Grid>
                        <Grid item xs style={{textAlign:'center'}}>
                            <h1 style={{margin:'10px', padding:'0'}}>Contact information</h1>
                            <DialogContentText id="alert-dialog-description">
                                Email: {mentors.email}
                            </DialogContentText>
                            <DialogContentText id="alert-dialog-description">
                                Phone: {mentors.number}
                            </DialogContentText>
                            <AiOutlineMail className="iconButton" onClick={() => window.location.href=`mailto:${mentors.email}`} />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
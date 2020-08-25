import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, Paper, FormControl, FormGroup, TextField, TextareaAutosize, Grid, Button, Modal } from '@material-ui/core';
import { FcCheckmark } from 'react-icons/fc'
import { AiOutlineClose } from 'react-icons/ai'
import background from '../../images/flowBackground.png'

const useStyles = makeStyles({
    contactRoot: {
        textAlign: 'center',
        paddingTop: '50px',
        // backgroundImage: `url(${background})`,
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // height: '100vh'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 'larger'
    },
    formHeader: {
        marginRight: '10px'
    },
    formContent: {
        textAlign: 'left',
    },
    textArea: {
        maxWidth: '460px',
        fontFamily: 'Arial',
        fontSize: '14px',
        maxHeight: '300px',
        // minHeight: '50px'
    },
    button: {
        backgroundColor: 'white',
        margin: 'auto',
        width: '20%',
        color: 'black',
        marginTop: '12px',
        position: 'relative',
        float: 'right',
        border: 'solid black',
        '&:hover': {
            backgroundColor: 'grey'
        }
    },
    modal: {
        width: '40%',
        position: 'absolute',
        margin: 'auto',
        marginTop: '20%'
    },
    modalMessage: {
        textAlign: 'center',
        padding: '10px'
    },
    paper: {
        width: '40%', 
        margin: 'auto', 
        marginBottom: '20px', 
        paddingBottom: '20px', 
        paddingTop: '20px',
    },
    modalHead: {
        fontSize: '25px',
        marginBottom: '10px'
    }
});

const Contact = (props) => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(false);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [subject, setSubject] = useState("");
    const [subjectError, setSubjectError] = useState(false);
    const [message, setMessage] = useState("");
    const [successModal, setSuccessModal] = useState(false);
    const [failModal, setFailModal] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }
    const handleSubmit = (e) => {
        if (name !== "" && email !== "" && subject !== "" && message !== "") {
            setNameError(false);
            setEmailError(false);
            setSubjectError(false);
            resetForm();
            setSuccessModal(true);
        } else {

            setFailModal(true);
            setNameError(name === "");
            setEmailError(email === "");
            setSubjectError(subject === "");
        }
    }
    const closeModal = (e) => {
        setSuccessModal(false);
        setFailModal(false);
    }

    const resetForm = () => {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }


    return (
        <div className={classes.contactRoot}>
            <Paper className = {classes.paper}>
                <div>
                    <p className={classes.header}>Questions?</p>
                </div>
                <div>
                    <FormControl className={classes.formContent}>
                        <Grid container>
                            <Grid item>
                                <p>Name: </p>
                                <TextField error={nameError} onChange={handleNameChange} value={name} className={classes.formHeader} required={true} label="Required" id="user-name" variant="outlined" />
                            </Grid>
                            <Grid item>
                                <p>Email: </p>
                                <TextField error={emailError} onChange={handleEmailChange} value={email} className={classes.formHeader} required={true} label="Required" id="user-email" variant="outlined" />
                            </Grid>
                        </Grid>
                        <p>Subject: </p>
                        <TextField error={subjectError} onChange={handleSubjectChange} value={subject} required={true} label="Required" id="message-subject" variant="outlined" />
                        <p>Message: </p>
                        <TextareaAutosize className={classes.textArea} onChange={handleMessageChange} value={message} rowsMax={9} rowsMin={8} required={true} label="Required" id="message-content" />
                        <Button variant='contained' className={classes.button} onClick={handleSubmit}>Submit</Button>
                    </FormControl>
                </div>
                <div>
                    <Modal className={classes.modal} onClose={closeModal} open={successModal}>
                        <Paper>
                            <div className={classes.modalMessage}>
                                <div className={classes.modalHead} style={{ color: 'green' }}>Success!</div>
                                <FcCheckmark size="60px" />
                                <p>Your message submitted successfully! Thank you, and I will respond as soon as possible.</p>
                            </div>
                        </Paper>
                    </Modal>
                </div>
                <div>
                    <Modal className={classes.modal} onClose={closeModal} open={failModal}>
                        <Paper>
                            <div className={classes.modalMessage}>
                                <div className={classes.modalHead} style={{ color: 'red' }}>Failed!</div>
                                <AiOutlineClose style={{ color: 'red' }} size="60px" />
                                <p>You are missing information :(</p>
                                <p>Ensure that you have entered information in each field</p>
                            </div>
                        </Paper>
                    </Modal>
                </div>
            </Paper>
        </div >
    )
};

export default Contact;
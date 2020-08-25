import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, DialogContent, Accordion, AccordionSummary, AccordionDetails, Button, TextareaAutosize, FormControlLabel, Checkbox, Select, Dialog, Grid, FormControl, TextField, Typography } from '@material-ui/core/'
// MenuItem, Paper, Input, DialogTitle
import { MdExpandMore } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';

const useStyles = makeStyles({
    root: {
        marginTop: '40px',
        width: '80%',
        margin: 'auto',
        marginBottom: '20px'
    },
    space: {
        paddingRight: '10px'
    },
    paper: {
        // padding: '20px',
    },
    header: {
        backgroundColor: '#00B4DB',
        color: 'black',
        fontSize: '25px',
        textAlign: 'center',
        padding: '20px',
        fontWeight: 'bold',
        marginTop: '20px',
        border: 'solid #00B4DB',
        borderRadius: '10rem'
    },
    content: {
        width: '95%',
        margin: 'auto'
    },
    subjectSection: {

    },
    textArea: {
        fontFamily: 'Arial',
        fontSize: '14px',
        minWidth: '100%',
        maxWidth: '100%',
        minHeight: '130px',
        maxHeight: '130px',
        resize: "none"
    },
    submitButton: {
        backgroundColor: '#33cc33',
        width: '20%',
        float: 'right',
        position: 'relative',
        display: 'flex',
        marginTop: '3%',
        marginRight: '2.5%',
        '&:hover': {
            backgroundColor: '#2aa22a',
        }
    },
    dialog: {
        width: '70%',
        margin: 'auto',
        color: 'black',
        textAlign: 'center'
    },
    formTitle: {
        textAlign: 'center',
        margin: 'auto'
    },
    loading: {
        fontSize: '20px',
        margin: 'auto',
        textAlign: 'center'
    },
    dialogContent: {
        margin: 'auto',
        padding: '10px',
        minHeight: '150px',
        minWidth: '150px',
        paddingTop: '6%',
        color: 'green'
    }
});

const BecomeMentor = (props) => {
    const classes = useStyles();
    //const [formOpen, setFormOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    //const [formData, setFormData] = useState([{}]);

    const [alg1, setAlg1] = useState(false);
    const [alg2, setAlg2] = useState(false);
    const [preCalc, setPreCalc] = useState(false);
    const [calc1, setCalc1] = useState(false);
    const [calc2, setCalc2] = useState(false);
    const [calc3, setCalc3] = useState(false);
    const [linearAlg, setLinearAlg] = useState(false);
    const [difEq, setDifEq] = useState(false);
    const [discrete, setDiscrete] = useState(false);

    const [genChem, setGenChem] = useState(false);
    const [oChem, setOChem] = useState(false);
    const [anChem, setAnChem] = useState(false);
    const [physChem, setPhysChem] = useState(false);
    const [chemLab, setChemLab] = useState(false);

    const [java, setJava] = useState(false);
    const [python, setPython] = useState(false);
    const [c, setC] = useState(false);
    const [js, setJS] = useState(false);
    const [webDev, setWebDev] = useState(false);
    const [backend, setBackend] = useState(false);
    const [algos, setAlgos] = useState(false);
    const [data, setData] = useState(false);
    const [interview, setInterview] = useState(false);

    const [molecular, setMolecular] = useState(false);
    const [cellular, setCellular] = useState(false);
    const [anatomical, setAnatomical] = useState(false);
    const [ecology, setEcology] = useState(false);
    const [evolutionary, setEvolutionary] = useState(false);
    const [genBio, setGenBio] = useState(false);
    const [genetics, setGenetics] = useState(false);
    const [bioChem, setBioChem] = useState(false);
    const [bioPhysics, setBioPhysics] = useState(false);

    const [writing, setWriting] = useState(false);
    const [shakespeare, setShakespeare] = useState(false);
    const [poetry, setPoetry] = useState(false);
    const [nonfiction, setNonFiction] = useState(false);
    const [fiction, setFiction] = useState(false);
    const [novel, setNovel] = useState(false);
    const [drama, setDrama] = useState(false);

    const [spanish, setSpanish] = useState(false);
    const [french, setFrench] = useState(false);
    const [german, setGerman] = useState(false);
    const [japanese, setJapanese] = useState(false);
    const [mandarin, setMandarin] = useState(false);
    const [hindi, setHindi] = useState(false);
    const [englishLang, setEnglishLang] = useState(false);
    const [submit, setSubmit] = useState(false);

    const grades = [
        { grade: '9th Grade', value: 9 },
        { grade: '10th Grade', value: 10 },
        { grade: '11th Grade', value: 11 },
        { grade: '12th Grade', value: 12 },
        { grade: 'College Freshmen', value: 13 },
        { grade: 'College Sophomore', value: 14 },
        { grade: 'College Junior', value: 15 },
        { grade: 'College Senior', value: 16 },
    ];

    /*const formTextFields = [
        'first-name',
        'last-name',
        'email',
        'phone-number',
        'school-grade',
        'tutoring-years',
        'personal-bio'
    ]*/


    //const openForm = e => {
    //    setFormOpen(true);
    //}

    //const closeForm = e => {
    //    setFormOpen(false);
    //}

    const resetForm = () => {
        document.getElementById('first-name').value = "";
        document.getElementById('last-name').value = "";
        document.getElementById('email').value= "";
        document.getElementById('phone-number').value = "";
        document.getElementById('school-grade').value = "";
        document.getElementById('tutoring-years').value = "";
        document.getElementById('personal-bio').value = "";
        setAlg1(false);
        setAlg2(false);
        setPreCalc(false);
        setCalc1(false);
        setCalc2(false);
        setCalc3(false);
        setLinearAlg(false);
        setDifEq(false);
        setDiscrete(false);
        setGenChem(false);
        setOChem(false);
        setAnChem(false);
        setPhysChem(false);
        setChemLab(false);
        setJava(false);
        setPython(false);
        setC(false);
        setJS(false);
        setWebDev(false);
        setBackend(false);
        setAlgos(false);
        setData(false);
        setInterview(false);
        setGenBio(false);
        setCellular(false);
        setAnatomical(false);
        setEcology(false);
        setEvolutionary(false);
        setMolecular(false);
        setGenetics(false);
        setBioChem(false);
        setBioPhysics(false);
        setWriting(false);
        setShakespeare(false);
        setPoetry(false);
        setNonFiction(false);
        setFiction(false);
        setNovel(false);
        setNovel(false);
        setDrama(false);
        setSpanish(false);
        setFrench(false);
        setGerman(false);
        setJapanese(false);
        setMandarin(false);
        setHindi(false);
        setEnglishLang(false);
    }

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            setSubmit(true);
            var fname = document.getElementById('first-name').value;
            var lname = document.getElementById('last-name').value;
            var email = document.getElementById('email').value;
            var number = document.getElementById('phone-number').value;
            var grade = document.getElementById('school-grade').value;
            var years = document.getElementById('tutoring-years').value;
            var bio = document.getElementById('personal-bio').value;
            
            var interestedSubjects = "";
            if(alg1) interestedSubjects +="Algebra 1, ";
            if(alg2) interestedSubjects +="Algebra 2, ";
            if(preCalc) interestedSubjects +="Pre-Calculus, ";
            if(calc1) interestedSubjects +="Calculus I, ";
            if(calc2) interestedSubjects +="Calculus II, ";
            if(calc3) interestedSubjects +="Calculus III, ";
            if(linearAlg) interestedSubjects +="Linear Algebra, ";
            if(difEq) interestedSubjects +="Differential Equations, ";
            if(discrete) interestedSubjects +="Discrete Mathematics, ";

            if(genChem) interestedSubjects +="General Chemistry, ";
            if(oChem) interestedSubjects +="Organic Chemistry, ";
            if(anChem) interestedSubjects +="Analytical Chemistry, ";
            if(physChem) interestedSubjects +="Physical Chemistry, ";
            if(chemLab) interestedSubjects +="Chem Lab Adivse, "; 
    
            if(java) interestedSubjects +="Java, ";
            if(python) interestedSubjects +="Python, ";
            if(c) interestedSubjects +="C/C++/C#, ";
            if(js) interestedSubjects +="Javascript/jQuery, ";
            if(webDev) interestedSubjects +="Web Development, ";
            if(backend) interestedSubjects +="Backend Development, ";
            if(algos) interestedSubjects +="Algorithms, ";
            if(data) interestedSubjects +="Data Structures, ";
            if(interview) interestedSubjects +="Interview Prep, ";
    
            if(genBio) interestedSubjects +="General Biology, ";
            if(cellular) interestedSubjects +="Cellular Biology, ";
            if(anatomical) interestedSubjects +="Anatomical Sciences, ";
            if(ecology) interestedSubjects +="Ecology, ";
            if(evolutionary) interestedSubjects +="Evolutionary Biology, ";
            if(molecular) interestedSubjects +="Molecular Biology, ";
            if(genetics) interestedSubjects +="Genetics, ";
            if(bioChem) interestedSubjects +="Biochemistry, ";
            if(bioPhysics) interestedSubjects +="Bio Physics, ";
    
            if(writing) interestedSubjects +="Writing Advise, ";
            if(shakespeare) interestedSubjects +="Shakespeare, ";
            if(poetry) interestedSubjects +="Poetry, ";
            if(nonfiction) interestedSubjects +="NonFiction, ";
            if(fiction) interestedSubjects +="Fiction, ";
            if(novel) interestedSubjects +="Novel, ";
            if(drama) interestedSubjects +="Drama, ";
    
            if(spanish) interestedSubjects +="Spanish, ";
            if(french) interestedSubjects +="French, ";
            if(german) interestedSubjects +="German, ";
            if(japanese) interestedSubjects +="Japanese, ";
            if(mandarin) interestedSubjects +="Mandarin Chinese, ";
            if(hindi) interestedSubjects +="Hindi, ";
            if(englishLang) interestedSubjects +="English, ";
            interestedSubjects = interestedSubjects.substring(0, interestedSubjects.length-2);

            const response = await fetch('/mentors', {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({fname, lname, email, number, grade, years, bio, interestedSubjects})
            });
            console.log(response);
            setSubmit(false);
            resetForm();
            setSuccess(true);
        } catch(err){
            console.error(err.message);
        }
    }


    

    return (
        <div className={classes.root}>
            {/* <Paper className={classes.paper}> */}
            <div className={classes.formTitle}>
                <Typography variant="h3">Become a mentor today!</Typography><br />
                <Typography variant="subtitle1">
                    Before COVID-19, student to student collaboration could be difficult to come by especially outside of friend groups,
                    schools, or even states. This collaboration has only become more difficult entering a virtual education environment,
                    however, you can change that! By becoming a mentor, you leave your mark and help other students achieve their goals!
                </Typography>
            </div> <br />
            <Dialog maxWidth='xs'  onClose={() => setSuccess(false)} fullWidth open={success} className={classes.dialog}>
                <h3>Your form submitted successfully!</h3>
                <DialogContent className={classes.dialogContent}>
                    <FaCheck size={80} />
                </DialogContent>
            </Dialog>
            <Dialog maxWidth='xs' fullWidth open={submit} className={classes.dialog}>
                <h3>Your form is submitting!</h3>
                <DialogContent className={classes.dialogContent}>
                    <CircularProgress thickness={4} size={80} />
                </DialogContent>
            </Dialog>

            <FormControl fullWidth>
                <div className={classes.section}>
                    <div className={classes.header}>General Information</div>
                    <div className={classes.content}>
                        <h3>Name</h3>
                        <Grid style={{ margin: 'auto' }} container>
                            <Grid className={classes.space} item xs={6}>
                                <TextField id='first-name' fullWidth variant="outlined" required label="First name" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id='last-name' fullWidth variant="outlined" required label="Last name" />
                            </Grid>
                        </Grid>
                        <h3>Contact</h3>
                        <Grid style={{ margin: 'auto' }} container>
                            <Grid className={classes.space} item xs={6}>
                                <TextField id='email' fullWidth variant="outlined" required label="Email" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id='phone-number' placeholder="Ex: (123) 456-7890" fullWidth variant="outlined" label="Phone Number" />
                            </Grid>
                        </Grid>
                        <h3>Education</h3>
                        <Grid style={{ margin: 'auto' }} container>
                            <Grid className={classes.space} item xs={6}>
                                <Select
                                    id='school-grade'
                                    native
                                    label="Grade"
                                    required
                                    aria-label="Select Grade"
                                    fullWidth
                                    defaultValue=""
                                >
                                    <option disabled value="" label="Select Grade" />
                                    {
                                        grades.map((grade) =>
                                            <option value={grade.value}>{grade.grade}</option>
                                        )
                                    }
                                </Select>

                            </Grid>
                            <Grid item xs={6}>
                                <TextField id='tutoring-years' fullWidth type="number" variant="outlined" label="Years of tutoring..." />
                            </Grid>
                        </Grid>
                        <h3>Bio</h3>
                        <TextareaAutosize id='personal-bio' className={classes.textArea} />
                    </div>
                    <div className={classes.header}>Experience</div>
                    <p style={{ textAlign: 'center' }}>Please only select subjects you would feel comfortable tutoring in!</p>
                    <div className={classes.content}>
                        <Accordion>
                            <AccordionSummary className={classes.subjectSection} expandIcon={<MdExpandMore />}>
                                Mathematics
                                        </AccordionSummary>
                            <AccordionDetails>
                                <Grid style={{ margin: 'auto', textAlign: 'center', borderTop: 'solid black', paddingTop: '2%' }} container>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="algebra1"
                                            control={<Checkbox checked={alg1} onClick={() => setAlg1(!alg1)} color="primary" />}
                                            label="Algebra 1"
                                        />
                                        <br />
                                        <FormControlLabel
                                            value="algebra2"
                                            control={<Checkbox id="alg2" checked={alg2} onClick={() => setAlg2(!alg2)} color="primary" />}
                                            label="Algebra 2"
                                        /> <br />
                                        <FormControlLabel
                                            value="precalc"
                                            control={<Checkbox checked={preCalc} onClick={() => setPreCalc(!preCalc)} color="primary" />}
                                            label="Pre-Calculus"
                                        /> <br />
                                    </Grid>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="calculus1"
                                            control={<Checkbox checked={calc1} onClick={() => setCalc1(!calc1)} color="primary" />}
                                            label="Calculus I"
                                        /> <br />
                                        <FormControlLabel
                                            value="calculus2"
                                            control={<Checkbox checked={calc2} onClick={() => setCalc2(!calc2)} color="primary" />}
                                            label="Calculus II"
                                        /> <br />
                                        <FormControlLabel
                                            value="calculus3/multi"
                                            control={<Checkbox checked={calc3} onClick={() => setCalc3(!calc3)} color="primary" />}
                                            label="Calculus III/Multivariable Calculus"
                                        /> <br />
                                    </Grid>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="linearalgebra"
                                            control={<Checkbox checked={linearAlg} onClick={() => setLinearAlg(!linearAlg)} color="primary" />}
                                            label="Linear Algebra"
                                        /> <br />
                                        <FormControlLabel
                                            value="difeq"
                                            control={<Checkbox checked={difEq} onClick={() => setDifEq(!difEq)} color="primary" />}
                                            label="Differential Equations"
                                        /> <br />
                                        <FormControlLabel
                                            value="discrete"
                                            control={<Checkbox checked={discrete} onClick={() => setDiscrete(!discrete)} color="primary" />}
                                            label="Discrete Mathematics"
                                        />
                                    </Grid>
                                </Grid>

                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary className={classes.subjectSection} expandIcon={<MdExpandMore />} >
                                Chemistry
                                        </AccordionSummary>
                            <AccordionDetails>
                                <Grid style={{ margin: 'auto', textAlign: 'center', borderTop: 'solid black', paddingTop: '2%' }} container>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="genchem"
                                            control={<Checkbox checked={genChem} onClick={() => setGenChem(!genChem)} color="primary" />}
                                            label="General Chemistry"
                                        />
                                        <br />
                                        <FormControlLabel
                                            value="ochem"
                                            control={<Checkbox checked={oChem} onClick={() => setOChem(!oChem)} color="primary" />}
                                            label="Organic Chemistry"
                                        /> <br />
                                        <FormControlLabel
                                            value="anchem"
                                            control={<Checkbox checked={anChem} onClick={() => setAnChem(!anChem)} color="primary" />}
                                            label="Analytical Chemistry"
                                        /> <br />
                                    </Grid>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="phychem"
                                            control={<Checkbox checked={physChem} onClick={() => setPhysChem(!physChem)} color="primary" />}
                                            label="Physical Chemistry"
                                        /> <br />
                                        <FormControlLabel
                                            value="chemLabs"
                                            control={<Checkbox checked={chemLab} onClick={() => setChemLab(!chemLab)} color="primary" />}
                                            label="Chem Lab Advise"
                                        /> <br />
                                    </Grid>
                                    <Grid item xs>

                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary className={classes.subjectSection} expandIcon={<MdExpandMore />}>
                                Computer Science
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid style={{ margin: 'auto', textAlign: 'center', borderTop: 'solid black', paddingTop: '2%' }} container>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="java"
                                            control={<Checkbox checked={java} onClick={() => setJava(!java)} color="primary" />}
                                            label="Java"
                                        />
                                        <br />
                                        <FormControlLabel
                                            value="python"
                                            control={<Checkbox checked={python} onClick={() => setPython(!python)} color="primary" />}
                                            label="Python"
                                        /> <br />
                                        <FormControlLabel
                                            value="c"
                                            control={<Checkbox checked={c} onClick={() => setC(!c)} color="primary" />}
                                            label="C/C++/C#"
                                        /> <br />
                                    </Grid>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="js"
                                            control={<Checkbox checked={js} onClick={() => setJS(!js)} color="primary" />}
                                            label="Javascript/jQuery"
                                        /> <br />
                                        <FormControlLabel
                                            value="webdev"
                                            control={<Checkbox checked={webDev} onClick={() => setWebDev(!webDev)} color="primary" />}
                                            label="Web Development"
                                        /> <br />
                                        <FormControlLabel
                                            value="backend"
                                            control={<Checkbox checked={backend} onClick={() => setBackend(!backend)} color="primary" />}
                                            label="Backend Development"
                                        /> <br />
                                    </Grid>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="algos"
                                            control={<Checkbox checked={algos} onClick={() => setAlgos(!algos)} color="primary" />}
                                            label="Algorithms"
                                        /> <br />
                                        <FormControlLabel
                                            value="data"
                                            control={<Checkbox checked={data} onClick={() => setData(!data)} color="primary" />}
                                            label="Data Structures"
                                        /> <br />
                                        <FormControlLabel
                                            value="interview"
                                            control={<Checkbox checked={interview} onClick={() => setInterview(!interview)} color="primary" />}
                                            label="Interview Prep"
                                        />
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary className={classes.subjectSection} expandIcon={<MdExpandMore />}>
                                Biology
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid style={{ margin: 'auto', textAlign: 'center', borderTop: 'solid black', paddingTop: '2%' }} container>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="genBio"
                                            control={<Checkbox checked={genBio} onClick={() => setGenBio(!genBio)} color="primary" />}
                                            label="General Biology"
                                        /> <br />
                                        <FormControlLabel
                                            value="cellular"
                                            control={<Checkbox checked={cellular} onClick={() => setCellular(!cellular)} color="primary" />}
                                            label="Cellular Biology"
                                        /> <br />
                                        <FormControlLabel
                                            value="anatomical"
                                            control={<Checkbox checked={anatomical} onClick={() => setAnatomical(!anatomical)} color="primary" />}
                                            label="Anatomical Sciences"
                                        /> <br />
                                    </Grid>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="ecology"
                                            control={<Checkbox checked={ecology} onClick={() => setEcology(!ecology)} color="primary" />}
                                            label="Ecology"
                                        /> <br />
                                        <FormControlLabel
                                            value="evolutionary"
                                            control={<Checkbox checked={evolutionary} onClick={() => setEvolutionary(!evolutionary)} color="primary" />}
                                            label="Evolutionary Biology"
                                        /> <br />
                                        <FormControlLabel
                                            value="molecular"
                                            control={<Checkbox checked={molecular} onClick={() => setMolecular(!molecular)} color="primary" />}
                                            label="Molecular Biology"
                                        />
                                        <br />
                                    </Grid>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="genetics"
                                            control={<Checkbox checked={genetics} onClick={() => setGenetics(!genetics)} color="primary" />}
                                            label="Genetics"
                                        /> <br />
                                        <FormControlLabel
                                            value="bioChemistry"
                                            control={<Checkbox checked={bioChem} onClick={() => setBioChem(!bioChem)} color="primary" />}
                                            label="Biochemistry"
                                        /> <br />
                                        <FormControlLabel
                                            value="biophysics"
                                            control={<Checkbox checked={bioPhysics} onClick={() => setBioPhysics(!bioPhysics)} color="primary" />}
                                            label="Bio Physics"
                                        />
                                    </Grid>
                                </Grid>

                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary className={classes.subjectSection} expandIcon={<MdExpandMore />}>
                                English/Writing
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid style={{ margin: 'auto', textAlign: 'center', borderTop: 'solid black', paddingTop: '2%' }} container>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="writing"
                                            control={<Checkbox checked={writing} onClick={() => setWriting(!writing)} color="primary" />}
                                            label="Writing advise"
                                        />
                                        <br />
                                        <FormControlLabel
                                            value="shakespeare"
                                            control={<Checkbox checked={shakespeare} onClick={() => setShakespeare(!shakespeare)} color="primary" />}
                                            label="Shakespeare"
                                        /> <br />
                                        <FormControlLabel
                                            value="poetry"
                                            control={<Checkbox checked={poetry} onClick={() => setPoetry(!poetry)} color="primary" />}
                                            label="Poetry"
                                        /> <br />
                                    </Grid>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="nonfiction"
                                            control={<Checkbox checked={nonfiction} onClick={() => setNonFiction(!nonfiction)} color="primary" />}
                                            label="Nonfiction"
                                        /> <br />
                                        <FormControlLabel
                                            value="fiction"
                                            control={<Checkbox checked={fiction} onClick={() => setFiction(!fiction)} color="primary" />}
                                            label="Fiction"
                                        /> <br />
                                        <FormControlLabel
                                            value="novel"
                                            control={<Checkbox checked={novel} onClick={() => setNovel(!novel)} color="primary" />}
                                            label="Novel"
                                        /> <br />
                                    </Grid>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="drama"
                                            control={<Checkbox checked={drama} onClick={() => setDrama(!drama)} color="primary" />}
                                            label="Drama"
                                        /> <br />
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary className={classes.subjectSection} expandIcon={<MdExpandMore />}>
                                Foreign Language
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid style={{ margin: 'auto', textAlign: 'center', borderTop: 'solid black', paddingTop: '2%' }} container>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="spanish"
                                            control={<Checkbox checked={spanish} onClick={() => setSpanish(!spanish)} color="primary" />}
                                            label="Spanish"
                                        />
                                        <br />
                                        <FormControlLabel
                                            value="french"
                                            control={<Checkbox checked={french} onClick={() => setFrench(!french)} color="primary" />}
                                            label="French"
                                        /> <br />
                                        <FormControlLabel
                                            value="german"
                                            control={<Checkbox checked={german} onClick={() => setGerman(!german)} color="primary" />}
                                            label="German"
                                        /> <br />
                                    </Grid>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="japanese"
                                            control={<Checkbox checked={japanese} onClick={() => setJapanese(!japanese)} color="primary" />}
                                            label="Japanese"
                                        /> <br />
                                        <FormControlLabel
                                            value="Mandarin Chinese"
                                            control={<Checkbox checked={mandarin} onClick={() => setMandarin(!mandarin)} color="primary" />}
                                            label="Mandarin Chinese"
                                        /> <br />
                                        <FormControlLabel
                                            value="hindi"
                                            control={<Checkbox checked={hindi} onClick={() => setHindi(!hindi)} color="primary" />}
                                            label="Hindi"
                                        /> <br />
                                    </Grid>
                                    <Grid item xs>
                                        <FormControlLabel
                                            value="english"
                                            control={<Checkbox checked={englishLang} onClick={() => setEnglishLang(!englishLang)} color="primary" />}
                                            label="English"
                                        /> <br />
                                    </Grid>
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <Button onClick={onSubmitForm} className={classes.submitButton}>Submit</Button>
                </div>
            </FormControl >
            {/* </Paper> */}
        </div >
    );
}

export default BecomeMentor;

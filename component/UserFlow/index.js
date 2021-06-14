import React from 'react'
import styles from './styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '40%',
    paddingTop : '100px',
    paddingLeft : '70px',
    paddingRight : '35px',
    paddingBottom : '35px',  
    height : '60vh', 
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    paddingTop : '10px',
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  circle : {
    backgroundColor : '#000'
  }
}));

function getSteps() {
  return ['Title 1', 'Title 2', 'Title 3'];
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;
    case 1:
      return 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    case 2:
      return `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`;
    default:
      return 'Unknown step';
  }
}


export default function Progress() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  
  return (
      <div className = {styles.container}>
        <div className={classes.root} >
      <Stepper activeStep={activeStep} orientation="vertical" style = {{backgroundColor : "transparent"}}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
     
    </div>
        <div className = {styles.image}>
          <img className = {styles.phoneImg} src = "/images/phone.jpg" alt = "img" />
        </div>
      </div>
  
    
  );
}

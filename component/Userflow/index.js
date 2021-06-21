import React from "react";
import styles from "./styles.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '40%',
    // paddingTop : '100px',
    // paddingLeft : '70px',
    // paddingRight : '35px',
    // paddingBottom : '35px',
    // height : '60vh',
  },
 
  Typography : {
    fontFamily : "Roboto",
    fontSize : '18px',
    paddingBottom: '10px'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: "#343A40",
    color: "#fff",
    fontFamily : "Roboto"
  },
  actionsContainer: {
    padding: "10px",
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
    backgroundColor: "transparent",
  },
}));

function getSteps() {
  return ["Title 1", "Title 2", "Title 3"];
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
    case 1:
      return `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
    case 2:
      return `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `;
    default:
      return "Unknown step";
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
    <div className={styles.container}>
      <div className={styles.root}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          style={{ backgroundColor: "transparent" }}
        >
          {steps.map((label, index) => {
            let props = {};
            let labelProps = {};
            labelProps.icon = (
              <div
                style={{
                  backgroundColor: "#343A40",
                  color: "#fff",
                  borderRadius: "50%",
                  height: "35px",
                  width: "35px",
                  lineHeight: "35px",
                  textAlign: "center",
                }}
              >
                {index}
              </div>
            );
            return (
              <Step key={label} {...props} >
                <StepLabel {...labelProps} className = {styles.title}>{label}</StepLabel>
                <StepContent>
                  <Typography className = {classes.Typography}>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        variant="contained"
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        style={{ backgroundColor: "#343A40" }}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button
              onClick={handleReset}
              className={classes.button}
              style={{ backgroundColor: "#343A40" }}
            >
              Reset
            </Button>
          </Paper>
        )}
      </div>
      <div className={styles.image}>
        <img className={styles.phoneImg} src="/images/phone.jpg" alt="img" />
      </div>
    </div>
  );
}

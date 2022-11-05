import React from 'react';
import {createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { makeStyles, withStyles} from '@mui/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';


var theme = createTheme();
theme = responsiveFontSizes(theme);

const GreyTextTypography = withStyles({
  root: {
    color: "#70757A"
  }
})(Typography);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#784af4',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {<div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const stepper = (props) => {
  console.log(props);
        return(
            <div style={{width:"100%",display: "flex",alignItems:"center",justifyContent:"center"}}>    
            <Stepper activeStep={0} orientation="vertical">
              {props.stepContent.map((label, index) => {
                return (
                  <Step key={index} active={true}>
                    <StepLabel StepIconComponent={QontoStepIcon} >{<Typography variant="headline" component="h2"> {label.title}</Typography>}</StepLabel>
                    <StepContent>
                    <ThemeProvider theme={theme}>
                      <GreyTextTypography variant="h6">
                        {label.date}
                      </GreyTextTypography>
                      <Typography variant="h6">{label.content}</Typography>
                    </ThemeProvider>
                    </StepContent>
                  </Step>
                );
              })}
            </Stepper>
          </div>
        )
    
}

export default stepper;
import React from "react";
import styled from "styled-components";

const ProgressBar = styled.div`
  counter-reset: step;
  width: 100%;
`;

const ProgressItem = styled.li`
  & {
    list-style-type: none;
    float: left;
    position: relative;
    text-align: center;
    font-weight: 200;
    font-size: 12px;
    display: inline;
    ${props => (props.textColor ? "color: " + props.textColor : "")}
    ${props =>
      props.active
        ? `
      ${props.activeColor && "color: " + props.activeColor}
      font-weight: bold;
    `
        : ``}
    ${props => (props.active ? `font-weight: 600;` : ``)};
  }

  &:before {
    ${props =>
      props.completed ? "content: '\\2713';" : "content: counter(step);"}
    counter-increment: step;
    height: 30px;
    width: 30px;
    line-height: 30px;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    color: rgba(0, 0, 0, 0.6);
    border: 2px solid #ddd;
    ${props => props.rounded && `border-radius: 50%`};
    background-color: white;
    position: relative;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ddd;
    top: 15px;
    left: -50%;
    z-index: 0;
  }

  &:first-child:after {
    content: "";
    background-color: transparent;
    height: 0;
    width: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  padding-top: 10px;
  height: 70px;
  ${props => props.fontFamily && "font-family: " + props.fontFamily};
  ${ProgressBar} > ${ProgressItem} {
    width: ${props =>
      props.children && `${100 / props.children.props.children.length}%`};
  }
`;

const Stepper = props => {
  const { steps, currentStep, fontFamily, textColor, activeColor } = props;

  return (
    <Container fontFamily={fontFamily}>
      <ProgressBar>
        {steps &&
          steps.map((step, index) => {
            return (
              <ProgressItem
                key={index}
                active={currentStep === index}
                completed={currentStep > index}
                textColor={textColor}
                activeColor={activeColor}
              >
                {step}
              </ProgressItem>
            );
          })}
      </ProgressBar>
    </Container>
  );
};

export default Stepper;

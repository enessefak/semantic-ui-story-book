import React from "react";
import styled from "styled-components";

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  border-radius: 34px;
  overflow: hidden;
`;

const StyledSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;

  &:checked {
    + ${StyledSlider} {
      background-color: ${({ theme }) => theme.colors.primary};

      &:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
    }
  }
`;

const Switch = ({ checked }) => (
  <StyledSwitch class="switch">
    <StyledInput type="checkbox" checked={checked} />
    <StyledSlider />
  </StyledSwitch>
);

export default Switch;

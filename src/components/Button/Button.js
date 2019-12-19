import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styled, { ThemeContext } from "styled-components";

import { COLORS, SIZES } from "../../utils/constants";

const StyledButton = styled.button`
  border: none;
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 4px;
  color: ${({ color }) => (color === COLORS.DEFAULT ? "#000" : "#fff")};

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.8;
  }

  ${({ size }) => {
    if (size === SIZES.LARGE)
      return `
        padding: 15px 20px;
        font-size: 17px;
      `;
    if (size === SIZES.SMALL)
      return `
        padding: 8px 10px;
        font-size: 10px;
    `;
    return `
      padding: 10px 15px;
      font-size: 14px;
    `;
  }}
`;

/** A button indicates a possible user action */
const Button = ({ children, disabled, onClick, color, size }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <StyledButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      color={color}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string
};

Button.defaultProps = {
  onClick: null,
  color: COLORS.PRIMARY,
  size: ""
};

export default Button;

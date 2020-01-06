import styled from 'styled-components';

export const Icon = styled.svg`
  fill: #fff;
  display: inline;
  vertical-align: middle;
  margin: 4px;
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
`;

export const HiddenCheckbox = styled.input.attrs(() => ({ type: 'checkbox' }))`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const VisibleCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid ${props => props.theme.checkbox};
  border-radius: 2px;
  margin-right: 10px;
  transition: all 0.25s;

  ${Icon} {
    fill: ${props => (props.checked ? '#2196f3' : '#fff')};
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${props => props.theme.checkbox};
  }
`;

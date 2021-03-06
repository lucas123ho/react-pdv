import styled from 'styled-components';

import { Props } from '.';

// eslint-disable-next-line import/prefer-default-export
export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid #edf0f3;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
  text-align: center;
  width: 400px;
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-top: 31px;

  div + div {
    margin-left: 8px;
    flex: 1;
  }

  > div:first-child {
    width: 197px;
  }

  label {
    font-size: 14px;
    line-height: 16px;
    color: #292c48;
    font-weight: 300;
    display: block;
    text-align: left;
    padding-left: 20px;
    margin-bottom: 3px;
  }
`;

export const InputBox = styled.div<Props>`
  display: flex;
  align-items: center;
  height: 50px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(218, 218, 218);
  border-image: initial;
  border-radius: 24px;
  padding: ${props => props.isSmall ? '0 17px' : '0 24px'};

`;

export const Input = styled.input`
  font-size: 24px;
  line-height: 24px;
  width: 100%;
  color: rgb(68, 68, 68);
  background: transparent;
  border: 0;
  outline: none;
  -webkit-font-smoothing: antialiased !important;

  &::placeholder {
    color: #dadada;
  }
`;

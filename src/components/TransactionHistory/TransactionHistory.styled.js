import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: auto;
  margin-bottom: 50px;
  width: 450px;
  /* text-align: center; */
  border: ${props => props.theme.borders.normal};
  box-shadow: ${props => props.theme.shadows.standart};
`;

export const TransactionHead = styled.thead`
  font-size: large;
  background-color: #00bcd5;
  color: ${props => props.theme.colors.white};
`;

export const TransactionRow = styled.tr`
  &:nth-child(odd) {
    background-color: ${props => props.theme.colors.white};
  }

  &:nth-child(even) {
    background-color: #ecf1f3;
  }
`;

export const TransactionData = styled.td`
  text-align: center;
`;

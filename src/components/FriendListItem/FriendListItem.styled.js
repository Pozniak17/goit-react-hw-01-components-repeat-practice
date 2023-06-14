import styled from 'styled-components';

export const Item = styled.li`
  height: 50px;
  border: ${props => props.theme.borders.normal}; // 1px solid

  /* останній елемент */
  &:not(:last-of-type) {
    margin-bottom: ${props => props.theme.spacing(2)}; //10
  }

  display: flex;
  align-items: center;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.standart};
`;

export const Status = styled.span`
  margin-left: ${props => props.theme.spacing(2)}; //10px
  display: block;
  width: 15px;
  height: 15px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: ${props => props.theme.radii.round};
`;

export const Avatar = styled.img`
  margin-left: ${props => props.theme.spacing(2)}; //10px
`;

export const Name = styled.p`
  margin-left: ${props => props.theme.spacing(2)}; //10px
`;

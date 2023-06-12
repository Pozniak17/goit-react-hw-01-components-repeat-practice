import { getRandomHexColor } from 'components/utility/getRandomHexColor';
import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  width: 260px;
  box-shadow: ${props => props.theme.shadows.standart};

  border: ${props => props.theme.borders.normal} gray;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.white};
`;

export const Title = styled.h2`
  text-align: center;
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  border: ${props => props.theme.borders.normal};
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 9.8px;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  color: ${props => props.theme.colors.white};
`;

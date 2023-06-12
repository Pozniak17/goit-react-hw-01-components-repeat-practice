import styled from 'styled-components';

export const Container = styled.div`
  width: 270px;
  margin: auto;
  margin-top: 50px;
  box-shadow: ${props => props.theme.shadows.standart};
`;

export const Description = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 30px 0 30px 0;
`;

export const Avatar = styled.img`
  width: 170px;
  margin: auto;
  border-radius: ${props => props.theme.radii.round};
`;

export const Name = styled.h3`
  text-align: center;
`;

export const Tag = styled.p`
  text-align: center;
  color: #a9b3bd;
`;

export const Location = styled.p`
  text-align: center;
  color: #a9b3bd;
`;

export const Stats = styled.ul`
  background-color: #f3f6f9;
  list-style: none;

  display: flex;
  justify-content: space-evenly;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  padding: 10px 0 10px 0;
`;

export const Label = styled.span`
  color: #a9b3bd;
`;

export const Quantity = styled.h4``;

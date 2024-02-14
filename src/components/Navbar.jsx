import React from "react";
import styled from "styled-components";




const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: #6a0dad;
  }
`;

const CustomLink = styled.a`
  text-decoration: none; /* Remove underline */
  outline: none; /* Remove outline */
  color: inherit; /* Inherit color from parent */
`;

const MoneyText = styled.span`
  color: white; /* Text color for Money */
`;

const ViewText = styled.span`
  color: orange; /* Text color for View */
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
        <MoneyText>Money <ViewText>View</ViewText></MoneyText>
          
          <List>
          <ListItem><CustomLink href="#home">Home</CustomLink></ListItem>
            <ListItem><CustomLink href="#work">Works</CustomLink></ListItem>
            <ListItem><CustomLink href="#contact">Contact</CustomLink></ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Button ><CustomLink href="https://www.youtube.com">Register Now</CustomLink></Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;

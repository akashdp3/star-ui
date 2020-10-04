import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
  border-bottom: 1px solid ${(props: any) =>
    props.theme.colors.secondary.light};
`;
const Logo = Styled.a`
  font-size: 24px;
  margin: 20px 30px;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Logo>star</Logo>
      </Wrapper>
    );
  }
}

export default Header;

import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
  height: 40px;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <p>Header</p>
      </Wrapper>
    );
  }
}

export default Header;

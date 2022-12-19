import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return <Box>404</Box>;
};

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64;
    position: absolute;
    width: 100%,
    height: 100%,
`;

export default NotFound;

import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DisplayUser = () => {
  const data = useSelector((state) => state.users);

  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user.name}
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default DisplayUser;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import { removeUser } from '../store/slices/UserSlice';

const DisplayUser = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <Wrapper>
      {data.map((user) => {
        return (
          <li key={user.id}>
            {user.name}
            <button className='btn btn-delete' onClick={() => deleteUser(user.id)}>
              <FaTrash className='delete-icon'/>
            </button>
          </li>
        );
      })}
    </Wrapper>
  );
};


const Wrapper = styled.section``;

export default DisplayUser;

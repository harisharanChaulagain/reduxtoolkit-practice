import React from 'react';
import DeleteAllUser from '../components/DeleteAllUser';
import { fakeUserData } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import {addUser} from '../store/slices/UserSlice';
import DisplayUser from '../components/DisplayUser';

const UserDetails = () => {

  const dispatch = useDispatch();

  const users = useSelector((state) => {
    return state.users;
  });

  const addNewUser = () => {
    const newUser = fakeUserData();
    dispatch(addUser(newUser));
  }

  return (
    <div className='m-5'>
        <div className='custom-margin d-flex justify-content-between'>
            <div >
                <h3> List of User Details.</h3>
            </div>
            <button className='btn btn-primary' onClick={addNewUser}>Add New User</button>
        </div>
        <ul>
            <DisplayUser/>
        </ul>
        <hr />
        <DeleteAllUser/>
    </div>
  )
}

export default UserDetails;

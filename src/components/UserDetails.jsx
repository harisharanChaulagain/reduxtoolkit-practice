import React from 'react';
import DeleteAllUser from '../components/DeleteAllUser';

const UserDetails = () => {
  return (
    <div>
        <div className='custom-margin'>
            <div >
                List of User Details.
            </div>
            <button className='btn btn-primary'>Add New User</button>
        </div>
        <ul>
          <li>hello</li>
          <li>Hi</li>
        </ul>
        <hr />
        <DeleteAllUser/>
    </div>
  )
}

export default UserDetails
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../store/slice/usersSlide'

function UserList() {
  const { list: users } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <div className='container mt-4'>
      <div className='row'>
        {users.map((user) => (
          <div key={user.id} className='col-md-4 mb-4'>
            <div className='card'>
              <img src={user.avatar} alt='avatar' />
              <div className='card-body'>
                <h5 className='card-t'>
                  {user.first_name} {user.last_name}
                </h5>
                <p className='card-text'>{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserList

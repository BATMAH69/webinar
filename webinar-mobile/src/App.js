import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Users from './components/Users';
import User from './components/User';
import { SERVER_URL } from './lib/const';
function App() {
  const [users, setUsers] = useState(null)
  const [userId, setUserId] = useState(0)

  useEffect(() => {
    fetch(SERVER_URL + '/users')
      .then(res => res.json())
      .then(json => setUsers(json))
      .catch(err => console.log(err.message))
    setUserId(0)
  }, []);      

  const selectUser = (id) => {
    setUserId(id > users.length ? 0 : id);
  }
  
  const changeInfo = (key, value) => {
    const index = users.findIndex(user => user.id === userId)
    const item = { ...users[index] };
    item[key] = value;
    const list = [ ...users ];
    list[index] = item;
    setUsers(list);
  }
        
  if (!users) {
    return <Loader />
  }

  if (!userId) {
    return <Users users={users} selectUser={selectUser} />
  }

  const user = users.find(user => user.id === userId);
        
  return <User user={user} selectUser={selectUser} changeInfo={changeInfo} />

}

export default App;
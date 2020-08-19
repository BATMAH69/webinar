import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from './WebNative';

const styles = {
  emoji: {
    fontSize: 120,
  },
  users: {
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
    borderRadius: 20,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  description: {
    width: 50,
    color: 'gray',
  },
  layout: {
    paddingTop: 20,
  },
};

const UsersItemRow = ({ description, value }) => (
  <View style={styles.row}>
    <View style={styles.description}><Text>{description}:</Text></View>
    <View><Text>{value}</Text></View>
  </View>
);
        
const UsersItem = ({ id, name, website, selectUser }) => (
  <TouchableOpacity onPress={() => selectUser(id)} style={styles.card}>
    <View style={styles.icon}><Text>{name[0]}</Text></View>
    <View style={styles.column}>
      <UsersItemRow description="name" value={name} />
      <UsersItemRow description="www" value={website} />
    </View>
  </TouchableOpacity>
);
        
const Users = ({ users, selectUser }) => (
  <ScrollView style={styles.layout}>
    <View style={styles.users}>
      <View>
        {users.map(({ id, name, website }) => (
          <UsersItem key={id} id={id} name={name} website={website} selectUser={selectUser} />
        ))}
      </View>
    </View>
  </ScrollView>
);

export default Users;
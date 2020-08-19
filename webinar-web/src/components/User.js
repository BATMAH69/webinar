import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from './WebNative';
import { SERVER_URL } from '../lib/const';
const styles = {
  emoji: {
    fontSize: 120,
  },
  card: {
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  icon: {
    margin: 5,
    height: 100,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
    borderRadius: 50,
    fontSize: 48,
  },
  iconText: {
    fontSize: 48,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  row: {
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  description: {
    width: 70,
  },
  descriptionText: {
    marginTop: 5,
    color: 'gray',
  },
  buttons: {
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: 5,
  },
  layout: {
    paddingTop: 20,
  },
};

const sendUser = (user) => {
  const body = JSON.stringify(user);
  const headers = { "Content-Type": "application/json" };
  const options = {method:'put', body,  headers };
  fetch(SERVER_URL+'/user', options)
    .then(response => response.json())
    .then(response => alert(JSON.stringify(response)))
    .catch((err) => console.error(err))
};
        
const Button = ({ onClick, children }) => (
  <View>
    <TouchableOpacity onPress={onClick}>
      <Text style={styles.button}>{ children }</Text>
    </TouchableOpacity>
  </View>
);
        
const UsersInfoRow = ({ description, value, changeInfo }) => (
  <View style={styles.row}>
    <View style={styles.description}>
      <Text style={styles.descriptionText}>{description}:</Text>
    </View>
    <TextInput
      value={value}
      onChangeText={text => changeInfo(description, text)}
    />
  </View>
);
        
const User = ({ user, selectUser, changeInfo }) => (
  <ScrollView style={styles.layout}>
    <View style={styles.card}>
      <View style={styles.icon}>
        <Text style={styles.iconText}>{user.name[0]}</Text>
      </View>
      <View style={styles.column}>
        {
          Object.keys(user)
            .filter(key => typeof user[key] === 'string')
            .map((key) => (
              <UsersInfoRow
                key={key}
                description={key}
                value={user[key]}
                changeInfo={changeInfo}
              />
            ))
        }
      </View>
      <View style={styles.buttons}>
        <Button onClick={() => selectUser(user.id - 1)}>{'<-'}</Button>
        <Button onClick={() => selectUser(0)}>Список</Button>
        <Button onClick={() => sendUser(user)}>Отправить</Button>
        <Button onClick={() => selectUser(user.id + 1)}>{'->'}</Button>
      </View>
    </View>
  </ScrollView>
);

export default User;
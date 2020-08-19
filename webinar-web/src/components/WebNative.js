import React from 'react';

export const View = (props) => (
  <div {...props} />
);

export const ScrollView = (props) => (
  <div {...props} />
);

export const TouchableOpacity = ({onPress, ...props}) => (
  <div {...props} onClick={onPress} />
);

export const TextInput = ({onChangeText, ...props}) => (
  <input {...props} onChange={(event) => onChangeText(event.target.value)} />
);

export const Text = (props) => (
  <span {...props} />
);
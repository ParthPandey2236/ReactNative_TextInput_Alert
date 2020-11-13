import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

export default function App() {
  const[name,setName]=useState('');
  const [age,setAge] = useState('');
  return (
    <View style={styles.container}>
      
      <TextInput style={styles.input}
        placeholder='Name'
        placeholderTextColor='#FFF'
        onChangeText={(val)=>setName(val)}
      />
      <TextInput style={styles.input}
        placeholder='Age'
        placeholderTextColor='#FFF'
        keyboardType='numeric'
        onChangeText={(val) => setAge(val)}
      />
      <Button
        title='Show'
        onPress={()=>Alert.alert('My name is '+name+' and I am '+age+' years old.')}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 30,
    justifyContent: 'center',
  },
  input:{
    alignItems:'center',
    borderRadius:10,
    borderWidth: 1,
    color:'#FFF',
    borderColor: '#FFF',
    padding: 8,
    width: 300,
    marginBottom:10
  }
});

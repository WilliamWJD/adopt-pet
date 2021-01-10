import React from 'react';

import { Text, View } from 'react-native';

const App:React.FC = () =>{
  return(
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#7159c1' }}>
      <Text style={{ color:'#fff', fontWeight:'bold' }}>Hello World</Text>
    </View>
  )
}

export default App;
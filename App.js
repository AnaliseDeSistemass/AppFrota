import React, {useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  StatusBar,
  Animated} from 'react-native';
import { Ionicons } from '@expo/vector-icons';  

export default function App() {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 80}));
  const [input, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
       <Image
    
       source={require('./assets/logobrancaBanpara.png')}
       />
       <StatusBar style="auto" />
       <Text>Login</Text>
      </View>

      <Animated.View 
      style={[
        styles.container,
        {
          transform: [
            {translateY: offset.y }
          ]
        }
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Cpf"
          autoCorrect={false}
          onChangeText={()=> {}}
          />
      <View style={styles.inputArea}>
          <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          value={input}
          onChangeText={ (texto) => setInput(texto) }
          secureTextEntry={hidePass}
          />
          <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass) }>
            {hidePass ?
              <Ionicons name="eye" color="#C4C4C4" size={25} />  
              :
              <Ionicons name="eye-off" color="#C4C4C4" size={25} />
        }
        </TouchableOpacity>
      </View>
  

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.resgisterText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

      </Animated.View>
    </KeyboardAvoidingView>
    
  );
}

  const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#013d93'
  },
  containerLogo:{
    flex:1,
    justifyContent: 'center',
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    width: '90%',
    paddingBottom: 300,

  },
  inputArea:{
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 7,
    height: 50,
    alignItems: 'center',
    marginBottom: 15,
    fontSize: 18,
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    alignItems: 'center',
  },
  icon:{
    width: '8%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  btnSubmit:{
    backgroundColor:'#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText:{
    color: '#FFF',
    fontSize: 18
  },
  btnRegister:{
    marginTop: 10,
  },
  resgisterText:{
    color:'#FFF'
  },
  containerText:{
    color: '#fff'
  }
});



     
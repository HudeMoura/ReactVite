/* eslint-disable prettier/prettier */

import axios from 'axios';
import { useState } from 'react';

import Button from '../../../shared/inputs/input/buttons/button/Button';
import Input from '../../../shared/inputs/input/input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleLogin = async () => {
    await axios({
      method: "post",
      url: "http://localhost:8080/auth",
      data: {
        email: 'root@root.com',
        password: 'abc',
      },
    })
    .then((result) => {
      alert(`Fez Login ${result.data.accessToken}`);
      return result.data;
    })
    .catch(() => {
      alert('Usuário ou senha inválido!');
    });
  };
  
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer />
        <LogoImage src="./logo.png" />
        <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
        <Input title="USUÁRIO" margin='32px 0px 0px' onChange={handleEmail} value={email}/>
        <Input type='password' title="SENHA" margin='32px 0px 0px' onChange={handlePassword} value={password}/>
        <Button type="primary" margin='64px 0px 16px 0px' onClick={handleLogin}>ENTRAR</Button>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;

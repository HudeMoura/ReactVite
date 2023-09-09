/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/inputs/input/input';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const { accessToken, setAccessToken } = useGlobalContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { postRequest, loading } = useRequests();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    setAccessToken('novo token')
    postRequest('http://localhost:8080/auth', {
      email: email,
      password: password,
    });
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer />
        <LogoImage src="./logo.png" />
        <TitleLogin level={2} type="secondary">
          LOGIN ({accessToken})
        </TitleLogin>
        <Input title="USUÁRIO" margin="32px 0px 0px" onChange={handleEmail} value={email} />
        <Input
          type="password"
          title="SENHA"
          margin="32px 0px 0px"
          onChange={handlePassword}
          value={password}
        />
        <Button loading={loading} type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
          ENTRAR
        </Button>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;

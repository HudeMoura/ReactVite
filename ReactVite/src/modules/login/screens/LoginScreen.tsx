/* eslint-disable prettier/prettier */
import Input from '../../../shared/inputs/input/input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer />
        <LogoImage src="./logo.png" />
        <Input title="USUÁRIO"/>
        <Input title="SENHA"/>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;

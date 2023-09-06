/* eslint-disable prettier/prettier */
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
  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./background.png" />
      <ContainerLogin>
        <LimitedContainer />
        <LogoImage src="./logo.png" />
        <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
        <Input title="USUÁRIO"/>
        <Input title="SENHA"/>
        <Button type="primary" margin='64px 0px 16px 0px'>ENTRAR</Button>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;

import { BackgroundImage, ContainerLogin, LogoImage, LimitedContainer, ContainerLoginScreen } from "../styles/loginScreen.styles";

const LoginScreen = () => {

    return (<ContainerLoginScreen>
        <BackgroundImage src="./background.png"/>
        <ContainerLogin>
            <LimitedContainer />
            <LogoImage src="./logo.png" />
        </ContainerLogin>
    </ContainerLoginScreen>)
}

export default LoginScreen;
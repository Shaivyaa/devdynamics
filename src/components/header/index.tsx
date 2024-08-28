import logo from "../../assets/images/logo.jpeg";
import {
  ButtonContainer,
  DemoButton,
  HeaderContainer,
  ImageContainer,
  LoginButton,
} from "./index.styles";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <ImageContainer>
          <img src={logo} alt="logo" width={170} height={30} />
        </ImageContainer>
        <ButtonContainer>
          <LoginButton>Log in</LoginButton>
          <DemoButton>Request Demo</DemoButton>
        </ButtonContainer>
      </HeaderContainer>
    </>
  );
}

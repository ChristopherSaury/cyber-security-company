import React from 'react';
import CsLogo from '../../images/navLogo.png';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  Logo
} from './SigninElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'><Logo src ={CsLogo}/></Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Se connecter</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Mot de passe</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'>Entrer</FormButton>
              <Text>Mot de passe oublié ?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
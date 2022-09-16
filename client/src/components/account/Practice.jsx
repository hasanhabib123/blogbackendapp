import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled("img")({
  width: 100,
  margin: "auto",
  display: "flex",
  padding: "50px 0 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 25px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const Text = styled(Typography)`
  color: #878787;
  font-size: 14px;
`;

const LoginButton = styled(Button)`
  background: #fb6418;
  color: #fff;
  border-radius: 2px;
  text-transform: none;
  height: 48px;
`;
const SignUpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Practice = () => {
  const imageURL =
    "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";
  const [account, toggleAccount] = useState("login");
  const toggleSignUp = () => {
    account === "signUp" ? toggleAccount("login") : toggleAccount("signUp");
  };
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        {account === "login" ? (
          <Wrapper>
            <TextField label="Enter Username" variant="standard" />
            <TextField label="Enter Password" variant="standard" />
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained">Login</LoginButton>
            <SignUpButton onClick={() => toggleSignUp()}>
              Create an account
            </SignUpButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField label="Enter name" variant="standard" />
            <TextField label="Enter username" variant="standard" />
            <TextField label="Enter Password" variant="standard" />
            <SignUpButton>SignUp</SignUpButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton onClick={() => toggleSignUp()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Practice;

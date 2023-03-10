import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useState } from 'react';

const SignUpPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const [email, setEmail] = useState('');
  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>建立您的帳號</h1>

      <AuthInputContainer>
        <AuthInput
          label="帳號"
          placeholder="請輸入帳號"
          value={userName}
          onChange={(nameInputValue) => setUserName(nameInputValue)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          label="Email"
          type="email"
          placeholder="請輸入信箱"
          value={email}
          onChange={(emailInputValue) => setEmail(emailInputValue)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          label="密碼"
          type="password"
          placeholder="請輸入密碼"
          value={password}
          onChange={(passwordInputValue) => setPassWord(passwordInputValue)}
        />
      </AuthInputContainer>
      <AuthButton>註冊</AuthButton>
      <AuthLinkText>取消</AuthLinkText>
    </AuthContainer>
  );
};

export default SignUpPage;

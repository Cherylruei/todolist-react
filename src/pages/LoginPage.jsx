import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from 'contexts/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassWord] = useState('');
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth(); //取出需要的狀態與方法

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/todos');
    }
  }, [navigate, isAuthenticated]);

  const handleClick = async () => {
    if (username.length === 0) {
      return;
    }
    if (password.length === 0) {
      return;
    }
    const success = await login({
      // 回傳值變成只有一個布林值
      username,
      password,
    });

    if (success) {
      Swal.fire({
        position: 'top',
        title: '登入成功',
        timer: 1000,
        icon: 'success',
        showConfirmButton: false,
      });
      return;
    }

    Swal.fire({
      position: 'top',
      title: '登入失敗',
      timer: 1000,
      icon: 'error',
      showConfirmButton: false,
    });
    // console.log('authToken', authToken); 失敗得到的 authToken 為 undefined
  };
  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>登入 Todo</h1>

      <AuthInputContainer>
        <AuthInput
          label="帳號"
          placeholder="請輸入帳號"
          value={username}
          onChange={(nameInputValue) => setUsername(nameInputValue)}
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
      <AuthButton onClick={handleClick}>登入</AuthButton>
      <Link to="/signup">
        <AuthLinkText>註冊</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default LoginPage;

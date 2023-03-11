import { useAuth } from 'contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  // 使用 useEffect 在 navigate 和 isAuthenticated 有變化時重新渲染
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/todos');
    } else {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  return <div>HomePage</div>;
};

export default HomePage;

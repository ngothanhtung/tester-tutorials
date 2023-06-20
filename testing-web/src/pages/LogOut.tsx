import Cookies from 'universal-cookie';
import React from 'react';
import { useNavigate } from 'react-router';

type Props = {};

export default function LogOut({}: Props) {
  const navigate = useNavigate();

  React.useEffect(() => {
    const cookies = new Cookies();
    cookies.remove('username');
    cookies.remove('password');

    navigate('/home');
  }, []);

  return <div>LogOut</div>;
}

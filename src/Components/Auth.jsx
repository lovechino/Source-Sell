import { notification } from 'antd';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';



const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const[confirm,setConfirm] = useState("")
  const{
    register : Login,
    handleSubmit : LoginSubmit 
  } = useForm()
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `System error`,
      description:
        'Hệ thống đang bị lỗi',
      placement,
    });
  };
  const{
    register : Register,
    handleSubmit : RegisterSubmit 
  } = useForm()

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  // const handleLoginSubmit = (data) => {

    
    
  // };

  // const handleRegisterSubmit = (data) => {
  
  //   }
  return (
    <div className="p-10">
      {contextHolder}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        {isLogin ? (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="loginEmail" className="block text-gray-700 text-sm font-bold mb-2">
                 username
                </label>
                <input
                  type="text"
                  id="loginEmail"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nhập email"
                  required
                  {...Login('username')}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="loginPassword" className="block text-gray-700 text-sm font-bold mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  id="loginPassword"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nhập mật khẩu"
                  required
                  {...Login('password')}
                />
              </div>
              <button
                // type="submit"
                onClick={()=>openNotification('topRight')}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Login
              </button>
            </form>
            <p className="text-center text-gray-600 text-sm mt-4">
              Don't have an account?{' '}
              <button type="button" onClick={toggleForm} className="font-bold text-blue-500 hover:text-blue-700 focus:outline-none">
                Register now
              </button>
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Register</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="registerName" className="block text-gray-700 text-sm font-bold mb-2">
                  username
                </label>
                <input
                  type="text"
                  id="registerName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="username"
                  required
                  {...Register('username')}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="registerEmail" className="block text-gray-700 text-sm font-bold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="registerEmail"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nhập email"
                  required
                  {...Register('email')}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="registerPassword" className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="registerPassword"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nhập mật khẩu"
                  required
                  {...Register('password')}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                  ConfirmPassword
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Xác nhận mật khẩu"
                  required
                  value={confirm}
                  onChange={e=>setConfirm(e.target.value)}
                />
              </div>
              <button
                // type="submit"
                onClick={()=>openNotification('topRight')}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Register
              </button>
            </form>
            <p className="text-center text-gray-600 text-sm mt-4">
              Have an account?{' '}
              <button type="button" onClick={toggleForm} className="font-bold text-blue-500 hover:text-blue-700 focus:outline-none">
                Login now
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
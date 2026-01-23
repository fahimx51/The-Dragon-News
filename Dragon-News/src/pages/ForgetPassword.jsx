import React, { useEffect } from 'react';

const ForgetPassword = () => {
  useEffect(()=>{
      document.title = 'Forget-Password'
    } ,[])
    return (
      <div className="flex items-center justify-center m-20">
        <h1 className="text-5xl font-bold">
          Relax, Pressure your brain and try to forget your password
        </h1>
      </div>
    );
};

export default ForgetPassword;
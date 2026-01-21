import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
      <div className="bg-base-200 h-screen">
        <header className="py-10 w-11/12">
          <Navbar></Navbar>
        </header>

        <main className='w-11/12'>
            <Outlet></Outlet>
        </main>
      </div>
    );
};

export default AuthLayout;
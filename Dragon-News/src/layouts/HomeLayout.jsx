import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/HomeLayouts/LeftAside';
import RightAside from '../components/HomeLayouts/RightAside';
import PrivateRoute from '../routes/PrivateRoute';

const HomeLayout = () => {
    return (
      <div>
        <header className="w-11/12 mx-auto my-5">
          <Header></Header>

          <section className="my-5">
            <LatestNews></LatestNews>
          </section>

          <nav className="">
            <PrivateRoute>
                <Navbar></Navbar>
            </PrivateRoute>
          </nav>
        </header>

        <main className='w-11/12 mx-auto grid grid-cols-12 gap-10'>
          <aside className='col-span-3 sticky h-fit top-5'>
            <LeftAside></LeftAside>
          </aside>
          <section className="col-span-6">
            <Outlet></Outlet>
          </section>

          <aside className='col-span-3 sticky h-fit top-5'>
            <RightAside></RightAside>
          </aside>
        </main>
      </div>
    );
};

export default HomeLayout;
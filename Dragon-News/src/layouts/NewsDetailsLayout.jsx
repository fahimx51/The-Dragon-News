import React from "react";
import RightAside from "../components/HomeLayouts/RightAside";
import Header from "../components/Header";
import { Outlet } from "react-router";

const NewsDetailsLayout = () => {

  return (
    <div className="">
      <header className="w-11/12 mx-auto my-5">
        <Header></Header>
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 gap-10">
        <section className="col-span-9">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetailsLayout;

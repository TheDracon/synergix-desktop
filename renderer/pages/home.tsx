import React from 'react';
import Head from 'next/head';
import SideBar  from '../components/SideBar';
import { WindowBar } from '../components/WindowBar';



function Home() {

  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>

      <WindowBar/>
      <div className="ml-20 p-4 mt-7 "> {/* content */}
        <p>Hello!</p>
      </div>
      <SideBar />

    </React.Fragment>
  );
}

export default Home;

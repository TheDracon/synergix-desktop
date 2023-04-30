import React from 'react'
import SideBar from '../components/SideBar';
import Head from 'next/head'
import { WindowBar } from '../components/WindowBar';

const Addresses = () => {
    return ( 
        <React.Fragment>
            <Head>
                <title>Addresses</title>
            </Head>
            <WindowBar/>
            <div className="ml-20 p-4 mt-7 "> {/* content */}
                <div></div>
            </div>
            <SideBar />

        </React.Fragment>
     );
}
 
export default Addresses;
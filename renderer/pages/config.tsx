import React, { useEffect } from 'react'
import SideBar from '../components/SideBar';
import Head from 'next/head'
import { WindowBar } from '../components/WindowBar';

const Config = () => {
    useEffect(() => {
        // Add the class to body on mount
        document.body.classList.add("scrollable");
    
        // Remove the class from body on unmount
        return () => {
          document.body.classList.remove("scrollable");
        };
      }, []);
    return ( 
        <React.Fragment>
            <Head>
                <title>Config</title>
            </Head>
            <WindowBar/>
            <div className="ml-20 p-4 mt-7 "> {/* content */}
                <p>A</p>
            </div>
            <SideBar />

        </React.Fragment>
     );
}
 
export default Config;
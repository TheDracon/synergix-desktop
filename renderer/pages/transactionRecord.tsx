import React from 'react'
import SideBar from '../components/SideBar';
import Head from 'next/head'
import { WindowBar } from '../components/WindowBar';

const TransactionRecord = () => {
    return ( 
        <React.Fragment>
            <Head>
                <title>Transaction Record</title>
            </Head>
            <WindowBar/>
            <div className="ml-20 p-4 mt-7 "> {/* content */}
                <p>A</p>
            </div>
            <SideBar />

        </React.Fragment>
     );
}
 
export default TransactionRecord;
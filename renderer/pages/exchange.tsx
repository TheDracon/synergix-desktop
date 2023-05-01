import React, { useEffect, useState, useRef } from 'react'
import SideBar from '../components/SideBar';
import Head from 'next/head'
import { WindowBar } from '../components/WindowBar';
import { motion } from "framer-motion";
var ipc = require('electron').ipcRenderer;

const Exchange = () => {
    const [ balance, setBalance ] = useState(0)
    return ( 
        <React.Fragment>
            <Head>
                <title>Transactions</title>
            </Head>
            <WindowBar/>
            <motion.div className="bg-exchange h-screen w-screen fixed -z-50 brightness-150" 
                    initial={{ y: -1000, }}
                    animate={{ y: 0, }}
                    exit={{ y: 1000, }}
                    transition={{
                        duration: .3,
                        ease: "easeInOut",
                    }} > 
            </motion.div>

            <motion.div className='ml-10 mt-5 text-text font-mono w-screen h-screen flex justify-center items-center'
                initial={{ y: -1000, }}
                animate={{ y: 0, }}
                exit={{ y: 1000, }}
                transition={{
                    duration: .3,
                    ease: "easeInOut",
                }} >
                    
                <div className="transition ease-in duration-500 hover:backdrop-blur-lg exchange-box mx-auto space-y-12 border-2 border-dashed border-secondary p-10 shadow-xl shadow-primary ">
                    <h2 className="text-5xl font-bold mb-8">Exchange Synergyx</h2>
                    <div className="mb-4">
                        <label className="block text-gray-300 font-bold mb-2">To:</label>
                        <input className=" bg-primary border-2 border-transparent focus:border-secondary appearance-none  rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline" id="to" type="text" placeholder="Enter recipient's Synergyx address"/>
                    </div>
                    <div className="mb-4 ">
                        <label className="block text-gray-300 font-bold mb-2">Amount:</label>
                        <input className="bg-primary border-2 border-transparent focus:border-secondary border-spacing-0 m-0 shadow rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline appearance-none" step=".1" id="amount" type="number" placeholder="Enter amount to send"/>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm font-bold italic">(Available balance: {balance} SRX)</span>
                        <button className="exchange-submit-btn fixed shadow-xl shadow-primary bg-blue-500 hover:bg-blue-700
                            text-gray-200 font-bold py-2 px-4
                            rounded hover:text-white group" type="button" style={{marginLeft: "24rem"}}><span className='shadow-2xl'>Send</span></button>
                    </div>
                </div>

            </motion.div>

            <SideBar/>

        </React.Fragment>
     );
}
 
export default Exchange;
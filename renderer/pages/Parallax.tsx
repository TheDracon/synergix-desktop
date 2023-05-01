import React from 'react'
import SideBar from '../components/SideBar';
import Head from 'next/head'
import { WindowBar } from '../components/WindowBar';

const Parallax = () => {
    return ( 
        <React.Fragment>
            <body>
                
                <main>
                    <section className="no-parallax">
                        <h1>Fun fact:</h1>
                    </section>
                    <section className="parallax bg">
                        <h1>
                        The sound that occurs when you snap your fingers is made by your
                        middle finger hitting your palm!
                        </h1>
                    </section>
                    <section className="no-parallax">
                        <h1>Have a nice day!</h1>
                    </section>
                </main>
            </body>
        </React.Fragment>
     );
}
 
export default Parallax;
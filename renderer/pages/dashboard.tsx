import React from 'react'
import SideBar from '../components/SideBar';
import Head from 'next/head'
import Link from "next/link"
import { WindowBar } from '../components/WindowBar';
import ChartComponent from '../components/ChartComponent';
import { randomInt } from 'crypto';
import tailwindConfig from '../tailwind.config.js'
import { motion } from "framer-motion";


const Dashboard = () => {
    const [balance, setBalance] = React.useState(0.172712);
    const [chartData, setChartData] = React.useState([16, 16, 16, 16, 16]);
    const [labels, setLabels] = React.useState(["Data1", "Data2", "Data3", "Data4", "Data6"])
    const options = {
        transitions: {
          show: {
            animations: {
              x: {
                from: 0
              },
              y: {
                from: 0
              }
            }
          },
          hide: {
            animations: {
              x: {
                to: 1000
              },
              y: {
                to: 1000
              }
            }
          }
        }
      }
    const [datasets, setDatasets] = React.useState([{
        label: "Dataset",
        data: chartData,
        backgroundColor: [tailwindConfig.theme.colors.red[500], tailwindConfig.theme.colors.yellow[500], tailwindConfig.theme.colors.secondary, tailwindConfig.theme.colors.green[500], tailwindConfig.theme.colors.purple[500]]
    }])
    const updateData = () => {
        setChartData([randomInt(100), randomInt(100), randomInt(100), randomInt(100), randomInt(100)])

        let dataSetCopy = JSON.parse(JSON.stringify(datasets))
        dataSetCopy[0]["data"] = chartData
        setDatasets(dataSetCopy)
    }


    return ( 
        <React.Fragment>
            <Head>
                <title>Dashboard</title>
            </Head>
            <WindowBar/>
            <motion.div className="bg-dashboard h-screen w-screen fixed -z-50" 
                    initial={{ y: -1000, }}
                    animate={{ y: 0, }}
                    exit={{ y: 1000, }}
                    transition={{
                        duration: .3,
                        ease: "easeInOut",
                    }} > 
			    </motion.div>

              	<motion.div
					initial={{ y: -1000, }}
					animate={{ y: 0, }}
					exit={{ y: 1000, }}
					transition={{
						duration: .3,
						ease: "easeInOut",
				}}  className='ml-20 p-4 mt-7 flex h-screen backdrop-brightness-110'>
					<div className="flex-wrap w-1/2">
						<h1 className='text-blue-100 text-8xl text-center font-mono' style={{fontSize: "10vh"}}>DASHBOARD</h1>
						{/* first div */}
						<div className="text-text bg-gray-800 w-2/2 h-2/6 m-2 p-8 pl-10 font-mono rounded-lg bg-opacity-50 static" style={{height: "30vh"}}>
							<p className="mb-4 xl:mb-6 xl:text-4xl lg:text-3xl"> Your current balance: </p>
							<p className="mb-4 xl:mb-2 2xl:mb-0 mt-2 bg-gradient-to-l from-blue-400 to-secondary bg-clip-text text-opacity-0 text-white" style={{fontSize: "4.5vw"}}>{balance} SRX </p>
							<Link href ="#" className=''><a className="xl:text-2xl lg:text-xl font-extrabold underline italic decoration-gray-500 text-gray-300">Convert to another currency</a></Link>
						</div>
						{/* third div */}
						<div className="mt-4 text-text bg-gray-800 w-2/2 h-3/6 m-2 p-8 pl-10 font-mono rounded-lg bg-opacity-50 static" style={{height: "46vh"}}>
							<p className="xl:text-xl"> Even more grafics and more stuff: </p>
							<ChartComponent datasets={datasets} labels={labels} type={"line"} options={options} style={{maxHeight: "39vh"}}/>
						</div>
					</div>
					{/* second div */}
					<div className=" text-text bg-gray-800  w-3/6 m-2 p-8 font-mono rounded-lg bg-opacity-50 static" style={{height: "91%"}}>
						<p className="ml-4 xl:text-5xl lg:text-4xl"> Grafics and stuff: </p>
						<ChartComponent  datasets={datasets} labels={labels} type={"pie"} options={options} className='mt-10' style={{maxHeight: "70vh"}}/>
					</div>
                </motion.div>
            	<SideBar />

        </React.Fragment>
     );
}
 
export default Dashboard;
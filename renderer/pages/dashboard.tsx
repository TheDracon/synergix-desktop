import React from 'react'
import SideBar from '../components/SideBar';
import Head from 'next/head'
import Link from "next/link"
import { WindowBar } from '../components/WindowBar';
import ChartComponent from '../components/ChartComponent';
import { randomInt } from 'crypto';
import tailwindConfig from '../tailwind.config.js'

const Dashboard = () => {
    const [balance, setBalance] = React.useState(0.172712);
    const [chartData, setChartData] = React.useState([16, 16, 16, 16, 16]);
    const [lables, setLabels] = React.useState(["Data1", "Data2", "Data3", "Data4", "Data6"])
    const options = {
        animation: {
          duration: 500
        },
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
            <div className="ml-20 p-4 mt-7 flex content-dashboard h-screen"> 
                <div className="flex-wrap w-1/2">
                    {/* first div */}
                    <div className="text-white bg-gray-600 w-2/2 h-2/5 m-2 p-8 pl-10 font-mono rounded-lg backdrop-blur-lg bg-opacity-10 static">
                        <p className="" style={{fontSize: "4.5vh"}}> Your current balance: </p>
                        <p className="mb-6 mt-2" style={{fontSize: "7vh"}}>{balance} SRX </p>
                        <Link href ="#"><a className="font-extrabold text-sm underline decoration-gray-400" style={{fontSize: "1rem"}}>Click here to convert</a></Link>
                    </div>
                    {/* third div */}
                    <div className="text-white bg-gray-700 w-2/2 h-3/6 m-2 p-8 pl-10 font-mono rounded-lg backdrop-blur-lg bg-opacity-10 static">
                        <p className="dynamic-text" style={{fontSize: "1.5vw"}}> Even more grafics and more stuff: </p>
                        <div className='flex justify-center'>
                            <ChartComponent datasets={datasets} labels={lables} type={"line"} options={options} style={{maxHeight: "39vh"}}/>
                        </div>
                    </div>
                </div>
                {/* second div */}
                <div className="text-white bg-gray-500 w-3/6  m-2 p-8 font-mono  rounded-lg backdrop-blur-lg bg-opacity-10 static" style={{height: "91%"}}>
                    <p className="ml-4 dynamic-text" style={{fontSize: "2vw"}}> Grafics and stuff: </p>
                    <ChartComponent  datasets={datasets} labels={lables} type={"pie"} options={options}  style={{maxHeight: "70vh"}}/>
                    <div className="mt-5 flex justify-center">
                        <button onClick={updateData} className="update-button">Update graph</button>
                    </div>
                </div>

            </div>
            
            <SideBar />

        </React.Fragment>
     );
}
 
export default Dashboard;
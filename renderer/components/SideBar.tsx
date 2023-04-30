import React from 'react';
import { BsGear } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md"
import { FaRegAddressCard } from "react-icons/fa"
import { AiOutlineSend, AiOutlineHistory } from "react-icons/ai"
import { useRouter } from 'next/router';


function SideBar() {
  const router = useRouter();
  const goTo = (page) => {
    console.log("hello")
    router.push(page);
  }
  return (
    <div className='mt-7 fixed top-0 left-0 h-screen w-20 m-0 
                    flex flex-col 
                    bg-gray-800 text-white shadow-xl'>
      <button className='sidebar-button' onClick={() => goTo("./dashboard")}>
        <SideBarIcon 
        icon={<MdOutlineDashboard size='32' />} 
        text="Dashboard"/>
      </button>
      <button className='sidebar-button' onClick={() => goTo("./newTransaction")}>
        <SideBarIcon
          icon={<AiOutlineSend size='32' />}
          text="Manage transactions"
        />
      </button>
      <button className='sidebar-button' onClick={() => goTo("./addresses")}>
        <SideBarIcon
          icon={<FaRegAddressCard size='32' />}
          text="Addresses"
        />
      </button>
      <button className='sidebar-button' onClick={() => goTo("./transactionRecord")}>
        <SideBarIcon 
        icon={<AiOutlineHistory size='32' />} 
        text='Transaction record' />
      </button>
      <button className='sidebar-button mt-auto mb-7' onClick={() => goTo("./config")}>
        <SideBarIcon
          icon={<BsGear size='32' />}
          text='Configuration'
        />
      </button>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "", className="" }) => (
  <div className={"sidebar-icon group " + className}>
    {React.cloneElement(icon, { className: "icon-hover" })}
    {text !== "" ? (
      <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
    ) : null}
  </div>
);

export default SideBar
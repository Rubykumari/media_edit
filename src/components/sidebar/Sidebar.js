import React from 'react';
import './Sidebar.scss';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="logo">
                    <h3 className='ml-2'>Logo</h3>
                </div>
                <ul className="sidebarbtn">
                    <li className='newVideo'>
                        <button>New Video</button>
                    </li>
                    <li className='newVideo'>
                        <button>Home</button>
                    </li>
                    <li className='newVideo'>
                        <button>Template</button>
                    </li>
                    <li className='newVideo'>
                        <button>All Videos</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
import React from 'react';
import './RightContent.scss';
import Records from '../../dummyData.json';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Search } from '@mui/icons-material';
import { useNavigate  } from 'react-router-dom';

export const RightContent = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/media_editing');
    };
    return (
        <div className='body'>
            <div className="bodyContent">
                <div className="topContent">
                    <div className="searchBar">
                        <Search className='searchIcon' />
                        <input type="text" name="" id="" placeholder='Search' />
                    </div>
                    <div className="userProfile">
                        <AccountCircleIcon className='userIcon' />
                    </div>
                </div>
                <div className="features">
                    <div className="btn">
                        <button className="create">
                            <ContentCutIcon />
                            Create Project</button>
                        <button className="record">
                            <VideocamIcon className='videoIcon' />
                            Record Video</button>
                    </div>
                    <div className="allVideo">
                        <p>All Videos &#62;</p>
                    </div>
                </div>
                <div className="recentVideo">
                    <h4>Recent Videos</h4>
                    <div className='videos'>
                        {Records.map(record => {
                            return (
                                <div className='box' key={record.id}>
                                    <video className="video" onClick={handleClick}>
                                        <source src={record.url}/>
                                    </video>
                                    <strong className="title">
                                        {record.title}
                                    </strong>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

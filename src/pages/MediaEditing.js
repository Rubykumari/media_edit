import React, { useState } from 'react'
import './MediaEditing.scss';
import Folder from '@mui/icons-material/DriveFolderUploadOutlined';
import AddIcon from '@mui/icons-material/LocalHospital';
import SortFileIcon from '@mui/icons-material/ListOutlined';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CropIcon from '@mui/icons-material/Crop';
import RefreshIcon from '@mui/icons-material/Refresh';

export const MediaEditing = () => {
    const [selectedPercentage, setSelectedPercentage] = useState('');
    const [value, setValue] = useState(50);
    const [opacity, setOpacity] = useState(50);

    const percentageOptions = [
        '10%',
        '20%',
        '30%',
        '40%',
        '50%',
        '60%',
        '70%',
        '80%',
        '90%',
        '100%',
    ];
    const handlePercentageChange = (event) => {
        setSelectedPercentage(event.target.value);
    };
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleOpacity = (event) => {
        setOpacity(event.target.value);
    }
    return (
        <div className='VideoEditor'>
            <div className="assets">
                <h4>Assets</h4>
                <div className="folders">
                    <div className="video">
                        <Folder className='folder' />
                        <p>Videos</p>
                    </div>
                    <div className="audio">
                        <Folder className='folder' />
                        <p>Audios</p>
                    </div>
                </div>
                <div className="icons">
                    <AddIcon className="add" />
                    <div className="rightIcons">
                        <img src="assets/sqaure.png" alt="" />
                        <SortFileIcon className='fileIcon' />
                    </div>
                </div>
            </div>
            <div className="media">
                <div className="cropCalculation">
                    <CropIcon className='cropIcon' />
                    <select id="percentageSelect" value={selectedPercentage} onChange={handlePercentageChange}>
                        <option value="">Select...</option>
                        {percentageOptions.map((percentage, index) => (
                            <option key={index} value={percentage}>{percentage}</option>
                        ))}
                    </select>
                </div>
                <div className="displayMedia">
                    <video className="video">
                        <source src="/assets/animal.mp4" />
                    </video>
                </div>
            </div>
            <div className="properties">
                <div className="btn">
                    <div className="topBtn">
                        <FileUploadIcon />
                        <button>Export</button>
                    </div>
                </div>
                <div className="property">
                    <h6>Properties</h6>
                    <div className="btns">
                        <div className="topBtns">
                            <div className="scale">
                                <span>Scale</span>
                                <input
                                    type="range"
                                    min={0}
                                    max={100}
                                    value={value}
                                    onChange={handleChange}
                                    step={1}
                                />
                                <button> {value}</button>
                            </div>
                            <div className="opacity">
                                <span>Opacity</span>
                                <input
                                    type="range"
                                    min={0}
                                    max={100}
                                    value={opacity}
                                    onChange={handleOpacity}
                                    step={1}
                                />
                                <button> {opacity}</button>

                            </div>
                        </div>
                        <div className="rotations">
                            <div className="zRotaion">
                                <span>Rotation</span>
                                <div className="zIcons">
                                    <RefreshIcon />
                                    <span>Z</span>
                                </div>
                                <button>00</button>
                            </div>
                            <div className="yRotation">
                                <div className="zIcons">
                                    <RefreshIcon />
                                    <span>Y</span>
                                </div>
                                <button>00</button>
                            </div>
                            <div className="xRotation">
                                <div className="zIcons">
                                    <RefreshIcon />
                                    <span>X</span>
                                </div>
                                <button>00</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

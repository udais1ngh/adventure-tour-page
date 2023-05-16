import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
const Main = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const iconColor = isSmallScreen ? 'white' : 'gray';
    const isSmallScreens = useMediaQuery('(max-width:600px)');
  const buttonStyle = isSmallScreens ? { width: '100%' } : {};
    return (
        <div className='main'>
            <div className='body'>
                <div className='img1'>
                    <h2 className='h2'>Adventures<br />
                        you must try<br />
                        before<br />
                        turn 30!</h2>
                </div>
            </div>
            <div className='right'>
                <div className='r'>
                    <div className='cards'>
                        <div className='right1'></div>
                        <div className='cd'>
                            <div><h2 className='sport'>Scuba Diving in Grand Island,Goa</h2></div>
                            <div className='icons'>
                                <div className='watch'>
                                    <AccessTimeIcon fontSize='small'  style={{ color: iconColor }} />
                                    <p className='p'>8 hour</p>
                                </div>
                                <div className='watch' >
                                    <LocationOnIcon fontSize='small' style={{ color: iconColor }} />
                                    <p className='p'>Goa,India</p>
                                </div>
                            </div>
                            <div className='utility'>
                                <div className='iconss'>
                                    <LocalDiningIcon fontSize='large' />
                                    <h3 className='h3'>Snacks</h3>
                                </div>
                                <div className='iconss'>
                                    <DirectionsCarIcon fontSize='large' />
                                    <h3>Transport</h3>
                                </div>
                                <div className='iconss'>
                                    <CameraAltIcon fontSize='large' />
                                    <h3>Photo/Video</h3>
                                </div>
                                <div className='iconss'>
                                    <FilterHdrIcon fontSize='large' />
                                    <h3>Activities</h3>
                                </div>
                            </div>
                            <div className='perform'>
                                <div className='txt'>
                                    <p className='pl'>Long Tail Boat Ride</p>
                                </div>
                                <div className='txt'>
                                    <p className='pl'>Underwater Photo and Video</p>
                                </div>
                            </div>
                        </div>
                        <div className='line'></div>
                        <div className='rating'>
                            <div className='sf'>
                                <div className='st'>
                                    <div className='star'>
                                        <div><StarIcon style={{ color: "#FFC300 " }} /><StarIcon style={{ color: "#FFC300 " }} /><StarIcon style={{ color: "#FFC300 " }} /><StarIcon style={{ color: "#FFC300 " }} /></div>
                                        <div className='rvalue'>4.7</div>
                                    </div>
                                    <div>
                                        <p className='rev'>36 reviews</p>
                                    </div>
                                </div>

                                <div className='st'>
                                    <div>
                                        <b><p className='revs'>Starting From</p></b>
                                    </div>
                                    <div> <b><div className='price'>₹ 1799</div></b></div>
                                </div>
                            </div>


                            <div className='b'>
                                <div className='btnn'><Button variant="contained" color="success"  style={{ ...buttonStyle }} >View Details</Button></div>
                            </div>
                        </div>


                    </div>
                    <div className='cards'>
                        <div className='right2'></div>
                        <div className='cd'>
                            <div><h2 className='sport'>Bungee Jumping,Goa</h2></div>
                            <div className='icons'>
                                <div className='watch'>
                                    <AccessTimeIcon fontSize='small'  style={{ color: iconColor }} />
                                    <p className='p'>30 min</p>
                                </div>
                                <div className='watch' >
                                    <LocationOnIcon fontSize='small'  style={{ color: iconColor }} />
                                    <p className='p'>Goa,India</p>
                                </div>
                            </div>
                            <div className='utility'>

                                <div className='iconss'>
                                    <CameraAltIcon fontSize='large' />
                                    <h3>Photo/Video</h3>
                                </div>
                                <div className='iconss'>
                                    <FilterHdrIcon fontSize='large' />
                                    <h3>Activities</h3>
                                </div>
                            </div>
                            <div className='perform'>
                                <div className='txt'>
                                    <p className='pl'>61 meter height</p>
                                </div>
                                <div className='txt'>
                                    <p className='pl'>Jump Photo and Video</p>
                                </div>
                                <div className='txt'>
                                    <p className='pl'>Certificate</p>
                                </div>
                            </div>
                        </div>
                        <div className='line'></div>
                        <div className='rating'>
                            <div className='sf'>
                            <div className='st'>
                            <div className='star'>
                                <div><StarIcon style={{ color: "#FFC300 " }} /><StarIcon style={{ color: "#FFC300 " }} /><StarIcon style={{ color: "#FFC300 " }} /><StarIcon style={{ color: "#FFC300 " }} /></div>
                                <div className='rvalue'>4.7</div>
                            </div>
                            <div>
                                <p className='rev'>36 reviews</p>
                            </div>
                            </div>
                           
                            <div className='st'>
                                <div>
                                    <b><p className='revs'>Starting From</p></b>
                                </div>
                                <div> <b><div className='price'>₹ 1799</div></b></div>
                            </div>
                            </div>
                            

                            <div  className='b'>
              
                                <div className='btnn'><Button size='madium' variant="contained" color="success"  style={{ ...buttonStyle }} >View Details</Button></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main;
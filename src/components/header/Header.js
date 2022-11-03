import React from 'react'
import {BusinessCenter, Chat, Home, Notifications, Search, SupervisorAccount} from '@material-ui/icons'
import './Header.css'
import HeaderOption from './HeaderOption'

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_100_100/0/1590003577120?e=1627516800&v=beta&t=7BJJZggysM8DjBXXFp7vSQWCXgcxK2TlIUUfSWWjv3Q" alt=""/>
                {/* SearchIcon */}
                <div className="header_search">
                    <Search/>
                     <input type="text"/>
                </div>
               
            </div>
            <div className="header_right">
                <HeaderOption title="Home" Icon={Home}/>
                <HeaderOption title="My Network" Icon={SupervisorAccount}/>
                <HeaderOption title="Jobs" Icon={BusinessCenter}/>
                <HeaderOption title="Messging" Icon={Chat}/>
                <HeaderOption title="Notifications" Icon={Notifications}/>
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQF2jn4SR5SI9g/profile-displayphoto-shrink_100_100/0/1517495955545?e=1625097600&v=beta&t=gCRMfnd4CcIFAo8wxPv0bvVhcxerCMd9EEEUSVbuJK8" title="me"/>
            </div>
        </div>
    )
}

export default Header

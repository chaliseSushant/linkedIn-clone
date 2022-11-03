import { Avatar } from '@material-ui/core';
import { ChatOutlined, Description, SendOutlined, ShareOutlined, ThumbUpOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import InputOption from '../feed/InputOption';
import './Post.css';

function Post({name,description,message,photoUrl}) {


    return (
        <div className="post">
            <div className="post_header">
                <Avatar/>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_buttons">
               <InputOption Icon={ThumbUpOutlined} title="Like" color="gray"/>
               <InputOption Icon={ChatOutlined} title="Comment" color="gray"/>
               <InputOption Icon={ShareOutlined} title="Share" color="gray"/>
               <InputOption Icon={SendOutlined} title="Send" color="gray"/>
            </div>
        </div>
    )
}

export default Post

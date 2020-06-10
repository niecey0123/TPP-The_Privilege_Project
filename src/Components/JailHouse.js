import React from 'react';
import axios from 'axios';
import { CameraFeed } from './CameraFeed';


// Upload to local seaweedFS instance
const uploadImage = async file => {
    const formData = new FormData();
    formData.append('file', file);

    // Connect to a seaweedfs instance
};

const JailHouse = ()=>{
    return(
      <div id="jail">
         <CameraFeed  sendFile={uploadImage} />

      </div>
    )
}

export default JailHouse;
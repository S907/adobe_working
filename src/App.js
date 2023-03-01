/*
Copyright 2020 Adobe
All Rights Reserved.
NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

import React, { Component, useEffect } from 'react';
import ViewSDKClient from './ViewSDKClient';

function App (){
   useEffect(()=>{
    const viewSDKClient = new ViewSDKClient();
    console.log(viewSDKClient);
    viewSDKClient.ready().then(() => {
      
        /* Invoke file preview */
        /* By default the embed mode will be Full Window */
        viewSDKClient.previewFile("pdf-div", {
          
        });
    });
}) 

   
        return <div style={{height:'100vh'}} id="pdf-div" className="full-window-div"/>;
   
}



export default App;

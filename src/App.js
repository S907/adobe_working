/*
Copyright 2020 Adobe
All Rights Reserved.
NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe.
*/

import React, { Component, useEffect, useState } from 'react';
// import ViewSDKClient from './ViewSDKClient';
import { loadDynamicUrl } from './viewPdf';

const ADOBE_KEY = 'd335ea21d7304cb9aa126236ce08ac96';
const url = 'https://static.raymondcamden.com/enclosures/cat.pdf'




function App() {
  const [loaded, setLoaded] = useState(false);
  console.log('16:::::::', window);



  useEffect(() => {
    console.log('18useeffect:::::::', window);
    if (loaded) return;
    loadDynamicUrl(setLoaded);
    console.log('18useeffect:::::::', window.AdobeDC);
    
    return ()=>{
      console.log('Entered this function');
      window.removeEventListener('load', loadDynamicUrl(setLoaded));
    }
  }, [loaded]);


  console.log('21:::::::', window);
  //working with class code
  //    useEffect(()=>{
  //     const viewSDKClient = new ViewSDKClient();
  //     console.log(viewSDKClient);
  //     viewSDKClient.ready().then(() => {

  //         /* Invoke file preview */
  //         /* By default the embed mode will be Full Window */
  //         viewSDKClient.previewFile("pdf-div", {

  //         });
  //     });
  // }) 

 
 
  useEffect(() => {
    console.log('51useffect:::::', window);
    console.log('51useffect:::::', window.AdobeDC);

    if (window.AdobeDC) {
      console.log('52 useffect:::::::',window.AdobeDC);
      displayPDF(url);
    } else {
      console.log('Entered else useffect');
      window.addEventListener("adobe_dc_view_sdk.ready", () => displayPDF(url));
    };
    function displayPDF(url) {
      console.log('Displayfunc::::', window.AdobeDC);
      console.log('PDF stuff!');
      let adobeDCView = new window.AdobeDC.View({ clientId: ADOBE_KEY, divId: "mypdf" });
      console.log('60useffect::::', adobeDCView);
           adobeDCView.previewFile({
        //https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf
        //https://static.raymondcamden.com/enclosures/cat.pdf
        content: { location: { url: url } },
        metaData: { fileName: "cat.pdf" }
      },
        {
          embedMode: "IN_LINE"
          // embedMode: "SIZED_CONTAINER"
        });
    }
    // displayPDF(url);
    return () => {
      console.log('Cleanup2nd::::::', window.AdobeDC);
      document.removeEventListener("adobe_dc_view_sdk.ready", ()=>displayPDF(url));
    }
  },[url]);





  return (
    <>
    <div className='wrapper'>

    <div style={{ height: '100vh' }} id="mypdf" className="full-window-div" />

    </div>
    </>
  );

}



export default App;

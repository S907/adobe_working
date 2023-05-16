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
import ViewSDKClient from './ViewSDKClient';
import { displayPDF, loadDynamicUrl } from './viewPdf';
const ADOBE_KEY = 'd335ea21d7304cb9aa126236ce08ac96';
const url = 'https://static.raymondcamden.com/enclosures/cat.pdf'




function App() {
  const [loaded, setLoaded] = useState(false);
  console.log('16:::::::', window);



  useEffect(() => {
    console.log('18useeffect:::::::', window);
    if (loaded) return;
    loadDynamicUrl(setLoaded);
    return () => {
      window.removeEventListener('load', loadDynamicUrl)
    }
  }, [loaded]);
  console.log('21:::::::', window.AdobeDC);

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
    console.log('51:::::', window.AdobeDC);
    if (window.AdobeDC) {
      displayPDF(url);
    } else {
      window.document.addEventListener("adobe_dc_view_sdk.ready", () => displayPDF(url));
    }
    function displayPDF(url) {
      console.log('PDF stuff!');
      let adobeDCView = new window.AdobeDC.View({ clientId: ADOBE_KEY, divId: "mypdf" });
      console.log('60::::', adobeDCView);
       return adobeDCView.previewFile({
        //https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf
        //https://static.raymondcamden.com/enclosures/cat.pdf
        content: { location: { url: url } },
        metaData: { fileName: "brochure.pdf" }
      },
        {
          embedMode: "IN_LINE"
          // embedMode: "SIZED_CONTAINER"
        });
    }
    // displayPDF(url);
    return () => {
      document.removeEventListener("adobe_dc_view_sdk.ready", displayPDF(url));
    }
  }, [url]);





  return <div style={{ height: '100vh' }} id="mypdf" className="full-window-div" />;

}



export default App;

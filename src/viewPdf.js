export const loadDynamicUrl = (setCallback)=>{
    const getScript = document.createElement('script');
    getScript.src = 'https://documentservices.adobe.com/view-sdk/viewer.js';
    getScript.addEventListener('load', setCallback(true));
    document.body.appendChild(getScript);
}


const ADOBE_KEY = 'd335ea21d7304cb9aa126236ce08ac96';

// export const displayPdf = ()=>{
//     console.log('Lets do some AWESOME PDF stuff!');
//     console.log('viewPdf',window);
//   let adobeDCView = new AdobeDC.View({clientId: 'd335ea21d7304cb9aa126236ce08ac96', divId: "mypdf" });
//   console.log('15:::::', adobeDCView);
//   adobeDCView.previewFile({
//     content:{location: {url: "https://static.raymondcamden.com/enclosures/cat.pdf"}},
//     metaData:{fileName: "cat.pdf"}
//   }); 
// }


//export function creating issue;
export const displayPDF =(url)=> {
    console.log('PDF stuff!');
    let adobeDCView = new window.AdobeDC.View({clientId: ADOBE_KEY, divId: "mypdf" });
    return adobeDCView.previewFile({
        //https://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf
        //https://static.raymondcamden.com/enclosures/cat.pdf
        // https://acrobatservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf
      content:{location: {url: url}
            },
      metaData:{fileName: "cat.pdf"}
    }, 
    {
      embedMode: "IN_LINE"
    });	
  }
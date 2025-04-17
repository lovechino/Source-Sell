import React, { useEffect } from 'react';

const AdSenseAd = () => {
  useEffect(()=>{
    try{
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }catch(err){
      console.error(err);
    }
  })
    return (
        <div className="ad-container">
          <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-5404595398978052"
            data-ad-slot="1981608578"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>
      );
};

export default AdSenseAd;
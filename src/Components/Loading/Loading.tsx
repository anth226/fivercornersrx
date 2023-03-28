import React from 'react';
import { Oval } from 'react-loader-spinner'

const Loading: React.FC = () => {
  return (
    <div style={{ width: '100vw', margin: "4rem auto", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Oval
        height={50}
        width={50}
        color="#0F172A"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>);
}

export default Loading;
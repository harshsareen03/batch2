import React from 'react'
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Divider, Radio, Space } from 'antd';
import { useState } from 'react';

const Navibutton = () => {
    const [size, setSize] = useState('large'); 
  return (
    <>
    <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
      
      <Radio.Button value="default">Default</Radio.Button>
      
    </Radio.Group>
    
  </>
  )
}

export default Navibutton
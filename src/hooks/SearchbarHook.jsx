import { useState } from 'react';
const SeachbarHook = () => {
  //Form input control
  const [content, setContent] = useState('');
  // form content update
  const bindContent = {
    content,
    onChange: (e) => {
      setContent(e.target.value);
    },
  };
  return [bindContent, content];
};

export default SeachbarHook;

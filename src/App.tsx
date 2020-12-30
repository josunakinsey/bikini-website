import React from 'react';
import { Burger } from "./Burger"
import { Menu } from './Menu';
import './App.css';


const useOnClickOutside = (ref: any, handler: any) => {
  React.useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
    [ref, handler],
  );
};

function App() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div>
      <div>
        <h1>Bonjour. This is burger menu tutorial</h1>
        <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
        <small>Icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
      </div>
      <div ref={node as any}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen as any} />
      </div>
    </div>

  );
}

export default App;





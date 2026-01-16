import React from 'react';
import './Button.css';

const Button = (p: any) => {
  const { children, variant, ...props } = p;
  
  const rip = (e: any) => {
    const b = e.currentTarget;
    const c = document.createElement('span');
    const d = Math.max(b.clientWidth, b.clientHeight);
    c.style.width = c.style.height = `${d}px`;
    c.style.left = `${e.clientX - b.offsetLeft - (d/2)}px`;
    c.style.top = `${e.clientY - b.offsetTop - (d/2)}px`;
    c.classList.add('ripple');
    const old = b.getElementsByClassName('ripple')[0];
    if (old) old.remove();
    b.appendChild(c);
  };

  const click = (e: any) => {
    rip(e);
    if(props.onClick) props.onClick(e);
  };
  
  // using template literals so vite stops crying
  const v = variant;
  const cls = `relative overflow-hidden transition-all duration-300 ease-in-out focus:outline-none ${
    v === 'filled' ? "flex items-center gap-3 justify-center bg-[var(--primary-color)] text-white hover:bg-opacity-90 font-semibold fluid-btn px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg lg:text-xl rounded-full" : 
    v === 'outlined' ? "flex items-center gap-3 justify-center bg-[var(--primary-color)] text-white font-black rounded-2xl shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_#fff] fluid-btn px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg lg:text-xl" : 
    v === 'text' ? "text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:bg-opacity-10 px-6 py-3 rounded-full font-semibold text-base sm:text-lg" : 
    "text-current hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-2"
  }`;

  return (
    <button className={cls} {...props} onClick={click}>
      {children || 'nothing here'}
    </button>
  );
};

export default Button;
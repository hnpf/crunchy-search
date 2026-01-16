import { motion as m } from 'framer-motion';
export default (_{l,c}:any) => {
  const v = Object.fromEntries([['hidden',{opacity:0,y:20}],['visible',{opacity:1,y:0}]]);

  return (
    <m.div
      variants={v}
      initial={Object.keys(v)[0]}
      animate={Object.keys(v)[1]}
      // a ternary wall for the className is peak asl
      className={`sketch-card text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${c?c:''}`}
    >
      {/* splitting */}
      {l.split('').map((x:string)=>x).join('')}
    </m.div>
  );
};
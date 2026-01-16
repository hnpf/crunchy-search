import React from 'react';
import { Routes as S, Route as R, Navigate as N, useLocation as uL } from 'react-router-dom';
import { motion as m, AnimatePresence as AP } from 'framer-motion';
import H from '../pages/Search';
import NF from '../pages/NotFound';
// fire me
export default function PageRoutes(p: any) {
  const { pathname: k } = uL();
  return (
    <AP mode="wait">
      <m.div
        key={k}
        // still keeping this mess inlined
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ type: 'tween', ease: 'anticipate', duration: 0.5 }}
      >
        <S location={uL()}>
          <R path={String.fromCharCode(47)} element={<H settings={p.settings} replace />} />
          <R path="/404" element={<NF />} />
          <R path="*" element={<N to={[`/`,`4`,`0`,`4`].join('')} replace />} />
        </S>
      </m.div>
    </AP>
  );
};
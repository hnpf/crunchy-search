
import React, { useState, useEffect, useCallback, createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Theme, SiteSettings, Photo } from './types';
import PageRoutes from './components/PageRoutes';

const App: React.FC = () => {
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const defaultSettings: SiteSettings = {
      theme: Theme.DARK,
      accentColor: '#d1305c',
      radius: 12,
      animationType: 'spring',
      searchEngine: 'google',
      openSearchInNewTab: true,
      availableSearchEngines: ['google', 'bing', 'brave', 'wikipedia']
    };
    const saved = localStorage.getItem('site_settings');

    if (saved) {
      const parsedSettings = JSON.parse(saved);
      return { ...defaultSettings, ...parsedSettings }; 

    }
    return defaultSettings; // return defaults if no settings
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [lightboxPhotos, setLightboxPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    localStorage.setItem('site_settings', JSON.stringify(settings));
    if (settings.theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    document.documentElement.style.setProperty('--primary-color', settings.accentColor);
    document.documentElement.style.setProperty('--global-radius', `${settings.radius}px`);

  }, [settings]);

  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    return () => window.removeEventListener('resize', setViewportHeight);
  }, []);

  const toggleTheme = useCallback(() => {
    setSettings(prev => ({ ...prev, theme: prev.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK }));
  }, []);

  const openLightbox = useCallback((index: number, photos: Photo[]) => {
    setActivePhotoIndex(index);
    setLightboxPhotos(photos);
  }, []);
  const closeLightbox = useCallback(() => {
    setActivePhotoIndex(null);
    setLightboxPhotos([]);
  }, []);

  const nextPhoto = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex + 1) % lightboxPhotos.length);
  }, [activePhotoIndex, lightboxPhotos]);

  const prevPhoto = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex - 1 + lightboxPhotos.length) % lightboxPhotos.length);
  }, [activePhotoIndex, lightboxPhotos]);

  const lightboxContextValue = React.useMemo(() => ({
    activePhotoIndex,
    sortedPhotos: lightboxPhotos,
    openLightbox,
    closeLightbox,
    nextPhoto,
    prevPhoto,
  }), [activePhotoIndex, lightboxPhotos, openLightbox, closeLightbox, nextPhoto, prevPhoto]);

  return (
    <Router>
      <PageRoutes settings={settings} />
    </Router>
  );
};


export default App;



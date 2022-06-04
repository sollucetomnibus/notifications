import React from 'react';

export const root: React.CSSProperties = {
  position: 'fixed',
  zIndex: 1000,
  right: 0,
  bottom: 0,
  width: '100%',
  maxWidth: 320,
  maxHeight: '100vh',
  overflow: 'hidden auto',
  padding: 20,
  background: '#f6f8fa',
  boxSizing: 'border-box',
};

export const data: React.CSSProperties = {
  width: '100%',
  padding: 10,
  background: '#fc0',
  boxSizing: 'border-box',
  opacity: 0,
  transition: 'opacity 1s ease',
  marginTop: 10,
};

import React from 'react';
import css from './Gallery.module.css';

export default function Loader() {
  return (
    <div className={css.backdrop}>
      <div className={css.loader}></div>
    </div>
  );
}

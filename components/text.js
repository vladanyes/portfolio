import React from 'react';
import styles from './text.module.css';

export const Text = ({ text }) => {
  console.warn('text', text);

  if (Array.isArray(text)) {
    return text.map((value) => {
      const {
        annotations: { bold, code, color, italic, strikethrough, underline },
        text,
      } = value;

      return (
        <span
          className={[
            bold ? styles.bold : '',
            code ? styles.code : '',
            italic ? styles.italic : '',
            strikethrough ? styles.strikethrough : '',
            underline ? styles.underline : '',
          ].join(' ')}
          style={color !== 'default' ? { color } : {}}
        >
          {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
        </span>
      );
    });
  }

  if (!text) {
    return <span>{text}</span>;
  } else {
    return null;
  }
};

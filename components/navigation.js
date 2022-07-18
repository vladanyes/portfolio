import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import cn from 'classnames';

const Navigation = () => {
  const classes = useStyles();

  return (
    <ul className={classes.nav}>
      {/*<li className={classes.navItem}>*/}
      {/*<a href="https://ryabinin.dev/blog" className={classes.link}>*/}
      {/*  blog*/}
      {/*</a>*/}
      {/*</li>*/}
      <li className={classes.navItem}>
        <a
          href="https://dev.to/vladanyes"
          rel="nofollow noopener noreferrer"
          target="_blank"
          className={classes.link}
        >
          blog
        </a>
      </li>
      <li className={classes.navItem}>
        <a className={cn(classes.link, classes.disabled)}>projects</a>
      </li>
      {/*<li className={classes.navItem}>*/}
      {/*  <a href="/cv.pdf" target="_blank" className={classes.link}>*/}
      {/*    cv*/}
      {/*  </a>*/}
      {/*</li>*/}
      {/*<li className={cn(classes.navItem, classes.icon)}>i</li>*/}
    </ul>
  );
};

const useStyles = createUseStyles({
  disabled: {
    cursor: 'not-allowed',
  },
  nav: {
    fontFamily: 'Zen Tokyo Zoo',
    zIndex: 1,
    paddingInlineStart: 0,
    marginBlockStart: 0,
    marginBlockEnd: 0,
    listStyleType: 'none',
  },
  navItem: {
    userSelect: 'none',
    cursor: 'pointer',
    fontSize: 30,
    width: 40,
    height: 40,
    lineHeight: '40px',
    display: 'inline',
    marginLeft: 15,
    '&:not(:last-child):hover': {
      color: 'white',
    },
  },
  link: {
    color: 'white',
    '&:hover': {
      textDecoration: 'none',
      color: 'black',
    },
  },
  icon: {
    fontWeight: 'bold',
    cursor: 'default',
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'white',
    borderRadius: '50%',
    color: 'transparent',
    animation: '$icon 10s ease infinite',
  },
  '@keyframes icon': {
    '0%': {
      color: 'rgb(138,89,239)',
    },
    '40%': {
      color: 'rgb(0, 0, 0)',
    },
    '60%': {
      color: 'rgb(65,155,249)',
    },
    '100%': {
      color: 'rgb(138,89,239)',
    },
  },
});

export default memo(Navigation);

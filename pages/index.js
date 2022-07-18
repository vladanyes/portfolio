import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { createUseStyles } from 'react-jss';
import particlesConfig from '../config/particles.json';
import Navigation from '../components/navigation';

export async function getStaticProps() {
  return {
    props: {},
  };
}

// todo: refactor without framer motion
const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const itemTop = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -200 },
};
const itemBottom = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 200 },
};

export default function Home() {
  const [vh, setVh] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    const changeVh = () => {
      setVh(window.innerHeight);
    };
    // changeVh();
    setTimeout(changeVh, 0);

    window.addEventListener('resize', changeVh);
    return () => {
      window.removeEventListener('resize', changeVh);
    };
  }, []);

  return (
    <div className={classes.wrapper} style={{ height: vh }}>
      <Head>
        <title>Vlad Ryabinin | Senior-Front-End Developer</title>
      </Head>
      <div className={classes.container}>
        <Particles
          key={vh}
          id="tsparticles"
          canvasClassName={classes.particles}
          options={particlesConfig}
        />
        <div className={classes.boxLeft}>
          <motion.ul initial="hidden" animate="visible" variants={list} className={classes.list}>
            <motion.li
              variants={itemTop}
              transition={{ duration: 1, delay: 0.3 }}
              className={classes.listItem}
            >
              Hey!🙋‍♂️
            </motion.li>
            <motion.li
              variants={itemBottom}
              transition={{ duration: 1, delay: 0.9 }}
              className={classes.listItem}
            >
              My name's Vlad.
            </motion.li>
            <motion.li
              variants={itemBottom}
              transition={{ duration: 1, delay: 1.2 }}
              className={classes.listItem}
            >
              I'm a <b>Software Engineer.</b>
            </motion.li>
            <motion.li
              variants={itemBottom}
              transition={{ duration: 1, delay: 1.4 }}
              className={classes.listItem}
            >
              Which never stops learning.
            </motion.li>
            <motion.li
              variants={itemBottom}
              transition={{ duration: 1, delay: 1.6 }}
              className={classes.listItem}
            >
              And always looking for new challenges.
            </motion.li>
          </motion.ul>
        </div>
        <div className={classes.boxRight}>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

// todo refactor later
const media_mobile = '@media screen and (max-width: 960px)';

const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: 0,
      padding: 0,
    },
    a: {
      textDecoration: 'none',
    },
  },
  wrapper: {
    fontFamily: 'Noto Sans JP, sans-serif',
    fontWeight: 300,
    position: 'relative',
    margin: 0,
    padding: 0,
    height: '100vh',
    background:
      'linear-gradient(-45deg, rgba(255,99,99,1) 0%, rgba(138,89,239,1) 10%, rgba(65,155,249,1) 100%)',
    backgroundSize: '200% 200%',
    animation: '$gradient 10s ease infinite',
  },
  particles: {
    position: 'absolute',
  },
  container: {
    height: '100%',
    margin: '0 auto',
    position: 'relative',
    display: 'flex',
    [media_mobile]: {
      alignItems: 'end',
      flexWrap: 'wrap',
    },
  },
  boxLeft: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    color: 'black',
    [media_mobile]: {
      width: '100%',
      order: 1,
    },
  },
  boxRight: {
    width: '50%',
    display: 'flex',
    padding: '20px 25px 0 0',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    [media_mobile]: {
      width: '100%',
      order: 0,
      justifyContent: 'center',
      padding: '15px 0 20px 0',
    },
  },
  list: {
    color: 'white',
    paddingInlineStart: 0,
    marginBlockStart: 0,
    marginBlockEnd: 0,
    listStyleType: 'none',
  },
  listItem: {
    position: 'relative',
    zIndex: 1,
    width: 'max-content',
    userSelect: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    pointerEvents: 'none',
    borderRadius: 12,
    padding: '5px 20px',
    fontSize: 35,
    margin: '0 0 15px 0',
    marginBottom: 15,
    [media_mobile]: {
      width: '80%',
      margin: '0 auto 15px auto',
    },
  },
  reactLink: {
    color: 'inherit',
    textDecoration: 'none',
  },
  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '10% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '10% 50%',
    },
  },
});

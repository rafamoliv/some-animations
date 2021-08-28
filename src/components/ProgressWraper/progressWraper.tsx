import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./style.css";

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function ProgressBar() {
  const [scrollTop, setScrollTop] = useState(0);
  const classes = useStyles();

  const onScroll = () => {
    const windowScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (windowScroll / height) * 100

    setScrollTop(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  return (
    <div>
      <div className="progressMainWrapper">
        <div className="progressMainStyle" style={{ width: `${scrollTop}%` }}></div>
      </div>

      <div className={classes.root}>
        <CircularProgress variant="determinate" value={scrollTop} className="circular" />
      </div>
    </div>
  )
}

export default ProgressBar

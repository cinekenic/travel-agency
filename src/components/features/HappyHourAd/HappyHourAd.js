import React from 'react';
import styles from './HappyHourAd.module.scss';
import PropTypes from 'prop-types';
import {formatTime} from '../../../utils/formatTime';




class HappyHourAd extends React.Component {
  constructor(){
    super();
    setInterval(()=>{
      this.forceUpdate();
    }, 1000);
    clearInterval();
  }


  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  }
    static defaultProps = {
      title: 'Happy Hour',
      promoDescription:
          'Its your time! Take advantage of Happy Hour! All offers 20% off!',
    };
    render(){


      const countdownTime = this.getCountdownTime();

      return(
        <div className={styles.component}>
          <h3 className={styles.title}>{this.props.title}</h3>
          <div className={styles.promoDescription}>{(countdownTime > 23 * 60 * 60) ? this.props.promoDescription : formatTime(countdownTime)}</div>
        </div>
      );
  
    }
  
    getCountdownTime(){
      const currentTime = new Date();
      const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

      if(currentTime.getUTCHours() >= 12){
        nextNoon.setUTCDate(currentTime.getUTCDate()+1);
      }
      return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
      
    }
}

export default HappyHourAd;
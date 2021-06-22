import styles from "./styles.module.css";
import Tab from "./Tab";
import dots from './dots_data'
import React, { useEffect ,useState, useCallback , useRef,Fragment } from 'react';
import useWebSocket, { ReadyState,useSocketIO } from 'react-use-websocket';

const Interactable = () => {
 
  const {
    sendMessage,
    lastMessage,
    readyState
  } = useWebSocket('ws://localhost:11000/', {
    onOpen: () => console.log('opened'),
    onError:(err)=>console.log('error when connecting',err),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => true,
  });
 
  useEffect(()=>{
    console.log("lastMessage",lastMessage);

  },lastMessage);

  const onDotClick=useCallback(() =>{
    console.log("sending")
  sendMessage("Hello")
  }, []);
  return (
    <Fragment>
      <div className={styles.main_container}>
        <div className={styles.personalised_heading}>
          <h1>Get Personalised</h1>
          <p>{readyState}</p>
        </div>
        <div className={styles.split}>
          <div className={styles.tab_container}>
            <Tab />
          </div>

          <div className={styles.img_container}>
          {dots.map(dot => {
               return <div className = {styles.dots} key = {dot.id} style = {{top:`${dot.yPos}`,left:`${dot.xPos}`}}
               onClick={onDotClick}
               ></div>
              
            })}
			

            <img
              className={styles.personalised_img}
              src='https://images.unsplash.com/photo-1585128792020-803d29415281?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
              alt='img'></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Interactable;

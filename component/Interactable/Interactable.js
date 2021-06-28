import { useEffect } from "react";
import React, { useMemo ,useState, useCallback , useRef,Fragment } from 'react';
import useWebSocket, { ReadyState,useSocketIO } from 'react-use-websocket';
import styles from "./styles.module.css";
import Tab from "./Tab";

import { v4 as uuidv4 } from 'uuid';
import {clientOnlineMessage,updateImageResponse, updateSceneRequest} from "../../Models"
import {messageType} from "../../Models/constants"

const uuid = uuidv4();


let imageContainerWidth = 0;
let imageContainerHeight =0;
let rendererScreenDimension= {x:0,y:0}

const Interactable = () => {
  console.log("Loaded Interactable")
//#region  states
const [imgSrc,setImgSrc] = useState("")
const [dots,setDotsData] = useState([]);
const [categories,setCategories] = useState([]);
const [products,setProducts] = useState([]);
//#endregion
useEffect(()=>{
  window.addEventListener('resize',windowResized);
  windowResized();
  console.log("Imge width",imageContainerWidth );
},[]);


  //#region Socket Set up

  const messageHistory = useRef([]);
  const {
    sendMessage,
    lastMessage,
    readyState
  } = useWebSocket('ws://35.154.229.151:6750', {
    onOpen: () => onConnected(),
    onError:(err,dat)=>console.log('error when connecting',err,dat),
    onMessage:(resp) => onMessageReceived(resp),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => true,
  });


  messageHistory.current = useMemo(() =>
  messageHistory.current.concat(lastMessage),[lastMessage]);

// On Server Connected to SOscket . Send a Client Online Message
 const onConnected =()=> {
  console.log('opened')
  let msg = {...clientOnlineMessage}
  msg.guid= uuid;
  console.log("Sending Client Online message ");
  sendMessage(JSON.stringify (msg));
 }

 const onMessageReceived =(response)=> {
   console.log("IS client handle: Received message",response);
  let msg = JSON.parse(response.data);
  const msgType = msg?.messageType;

  if(msgType !== undefined){
    if(msgType === messageType.initialRender){
      msg = {...updateImageResponse,...msg}
      rendererScreenDimension = msg.ScreenDimensions;
      console.log("Screen Dimensins", rendererScreenDimension);
      processRenderResponse(msg);
    }else if(msgType === messageType.renderResponse) {

    }
  }
  console.log(msg);
 }

 //#endregion
  
const onDotClick=useCallback((category,prodId) =>{
    console.log("clicked on",category)
  let swapProdREquest= {...updateSceneRequest};
  let swappedProducts= [{Id:"",ProductId:"blueBars"}]
  swapProdREquest.guid = uuid;
  swapProdREquest.swappedProducts = swappedProducts;
  console.log("Sending Mesage",swapProdREquest);
  sendMessage(JSON.stringify (swapProdREquest));

  }, []);

//#region Image and dots ReMapping

const windowResized =()=>{
 imageContainerWidth = document.getElementById('imageHolder').clientWidth;
 imageContainerHeight = document.getElementById('imageHolder').clientHeight;
 console.log("Image Container Size ",imageContainerWidth,imageContainerHeight);
}

const mapDotPositions=(dots)=>{
 for(let i=0; i < dots.length;++i){
   let dot = dots[i].position;
   console.log("Image container x ,y", imageContainerWidth,imageContainerHeight);
   console.log("old ",dots[i].categoryType," ", dot.x, " ", dot.y);
   dot.x = dot.x * imageContainerWidth / rendererScreenDimension.x;
   dot.y = dot.y * imageContainerHeight / rendererScreenDimension.y;
   console.log("new ",dots[i].categoryType," ", dot.x, " ", dot.y);
   dots[i].position = dot;
 }

 return dots;
}

const processRenderResponse=(renderResponse)=>{
  let dots = renderResponse.Products;
 // dots = mapDotPositions(dots);
 
  setImgSrc(renderResponse.Images[0]);

  console.log("CAlling set Dots");
  setDotsData(dots);

}
//#endregion

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

          <div className={styles.img_container} id="imageHolder">
          {dots.map((dot,index) => {
               return <div className = {styles.dots} key = {index} style = {{top:`${dot.position.y - 3}%`,left:`${dot.position.x - 3}%`}}
               onClick={()=>onDotClick(dot.categoryType,dot.productId)}
               ><p>{dot.categoryType}</p>
               </div>
              
            })}
			

            <img
              className={styles.personalised_img}
              src={imgSrc} alt="Interactable for your demo"
              ></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Interactable;

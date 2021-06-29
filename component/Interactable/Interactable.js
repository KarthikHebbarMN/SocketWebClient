import React, { useEffect ,useState, useCallback , useRef,Fragment } from 'react';
import styles from "./styles.module.css";
import Tab from "./Tab";
import { v4 as uuidv4 } from 'uuid';
import {clientOnlineMessage,updateImageResponse, updateSceneRequest} from "../../Models"
import {messageType} from "../../Models/constants"
var W3CWebSocket = require('websocket').w3cwebsocket;




let imageContainerWidth = 0;
let imageContainerHeight =0;
let rendererScreenDimension= {x:0,y:0}
const uuid = uuidv4();
const ws =new W3CWebSocket ('ws://35.154.229.151:6750');


const Interactable = () => {
  console.log("Loaded Interactable Component. With Socket inside the component")
//#region  states
const [imgSrc,setImgSrc] = useState("")
const [dots,setDotsData] = useState([]);
const [categories,setCategories] = useState([]);
const [products,setProducts] = useState([]);
//#endregion


ws.onerror = function(evt) {
  console.log('Connection Error',evt);
};
  //#region Socket Set up
  const sendMessage=(data)=>{
    ws.send(data);
  }
  ws.onopen = () => {
    // on connecting, do nothing but log it to the console
    onConnected();
    console.log('connected')
    }
    ws.onmessage = evt => {
      // listen to data sent from the websocket server
      console.log("Got event from WebSocket",evt)
      const message = JSON.parse(evt.data)
      onMessageReceived(message);
      }

  ws.onclose = (event) => {
    console.log('disconnected',event)
    // automatically try to reconnect on connection loss

    }
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
  let msg = response;
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

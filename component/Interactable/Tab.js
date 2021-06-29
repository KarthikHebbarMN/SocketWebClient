import React, { Fragment, useEffect } from "react";
import styles from "./styles.module.css";
import { useState } from "react";
// import tab_data from "./tab_data";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import axios from "axios";

const Tab = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const caturl = "api/v1/demointeractable/category";
  const prourl = "api/v1/demointeractable/category/prod/";
  const [idata, setIdata] = useState([]);
  // api/v1/demointeractable/category
  const baseurl = "http://20.197.30.199/";
  const getData = async (burl) => {
    const url = `${baseurl}${burl}`;
    try {
      let response = await axios.get(`${url}`);
      const data = response.data;

      console.log(data);
      return data;
    } catch (err) {
      console.log("error when the data form api ", burl, err);
    }
  };
  useEffect(async () => {
    let data = await getData(caturl);
    console.log(data);

    if (data !== undefined) {
      setIdata(data);
    }
  }, []);
  const [products, setProducts] = useState([]);

  const categorySelect = async (category, index) => {
    const newurl = prourl + category;

    let data = await getData(newurl);

    setProducts(data);
    setToggleState(index);
  };

  // --------tab title---------
  const tabMain = Object.values(idata).map((val) => (
    <Fragment>
      <div className={styles.tab_container}>
        <div className={styles.bloc_tabs}>
          <button
            className={
              toggleState === val.id ? styles.active_tabs : styles.tabs
            }
            onClick={() => categorySelect(val.category, val.id)}>
            {val.category}
          </button>
        </div>
      </div>
    </Fragment>
  ));
  // -------tab body---------
  const tabContent = Object.values(products).map((val) => (
    <Fragment>
      <div className={styles.content_tab}>
        <div className={styles.active_content}>
          <div className={styles.list_main}>
            <div className={styles.list}>
              <div className={styles.product_img}>
                <img
                  className={styles.item_img}
                  src={val.Image}
                  alt='img'></img>
              </div>
              <div className={styles.product_details}>
                <h3>{val.name}</h3>
                <p>{val.description}</p>
                <p>Price = {val.cost}</p>
              </div>
              <div className={styles.product_star}>
                <p>
                  <StarBorderIcon />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  ));
  return (
    <Fragment>
      <div className={styles.headtab}>{tabMain}</div>
      <div className={styles.bodytab}>{tabContent}</div>
    </Fragment>
  );
};

// const Tab = () => {
//   const [toggleState, setToggleState] = useState(1);
//   const toggleTab = (index) => {
//     setToggleState(index);
//   };
//   // --------tab title---------
//   const tabMain = tab_data.map((val) => (
//     <Fragment>
//       <div className={styles.tab_container}>
//         <div className={styles.bloc_tabs}>
//           <button
//             className={
//               toggleState === val.id ? styles.active_tabs : styles.tabs
//             }
//             onClick={() => toggleTab(val.id)}>
//             {val.type}
//           </button>
//         </div>
//       </div>
//     </Fragment>
//   ));
//   // -------tab body---------
//   const tabContent = tab_data.map((val) => (
//     <Fragment>
//       <div className={styles.content_tab}>
//         <div
//           className={
//             toggleState === val.id ? styles.active_content : styles.content
//           }>
//           <div className={styles.list_main}>
//             <div className={styles.list}>
//               <div className={styles.product_img}>
//                 <img className={styles.item_img} src={val.img1} alt='img'></img>
//               </div>
//               <div className={styles.product_details}>
//                 <h3>{val.product1}</h3>
//                 <p>{val.description1}</p>
//                 <p>Price = {val.price1}</p>
//               </div>
//               <div className={styles.product_star}>
//                 <p>
//                   <StarBorderIcon />
//                 </p>
//               </div>
//             </div>
//             <div className={styles.list}>
//               <div className={styles.product_img}>
//                 <img className={styles.item_img} src={val.img2} alt='img'></img>
//               </div>
//               <div className={styles.product_details}>
//                 <h3>{val.product2}</h3>
//                 <p>{val.description2}</p>
//                 <p>Price = {val.price2}</p>
//               </div>
//               <div className={styles.product_star}>
//                 <StarBorderIcon />
//               </div>
//             </div>
//             <div className={styles.list}>
//               <div className={styles.product_img}>
//                 <img className={styles.item_img} src={val.img3} alt='img'></img>
//               </div>
//               <div className={styles.product_details}>
//                 <h3>{val.product3}</h3>
//                 <p>{val.description3}</p>
//                 <p>Price = {val.price3}</p>
//               </div>
//               <div className={styles.product_star}>
//                 <StarBorderIcon />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   ));
//   return (
//     <Fragment>
//       <div className={styles.headtab}>{tabMain}</div>
//       <div className={styles.bodytab}>{tabContent}</div>
//     </Fragment>
//   );
// };

export default Tab;

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../FAQ/FAQ.module.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import FAQdata from "./FAQdata";

export const FAQ = () => {
  const [faq, setFAQ] = useState([]);

  const getData = () => {
    const url = "http://20.197.30.199/api/v1/landing/faq";
    axios
      .get(`${url}`)
      .then((response) => {
        const data = response.data;
        const dataArr = data.Faq !== undefined ? data.Faq : [];
        setFAQ(dataArr);
        console.log("data", dataArr);
        // setFAQ(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log("faq is", faq);

  return (
    <>
      <h1 className={styles.faqheading}>Frequently Asked Questions</h1>
      {Object.values(faq).map((data) => (
        <div className={styles.faq} key={data.id}>
          <div className={styles.list1}>
            <Accordion
              className={styles.accord}
              style={{ backgroundColor: "#333333", color: "white" }}
            >
              <AccordionSummary
                className={styles.summary}
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              >
                {data.question}
              </AccordionSummary>
              <AccordionDetails
                style={{ backgroundColor: "#FFFAED", color: "black" }}
              >
                <p>{data.answer}</p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      ))}
    </>
  );
};

// export async function getStaticProps() {
//   const res = await axios.get("http://20.197.30.199/api/v1/landing/faq");
//   const faq = await JSON.parse(res.json());
//   console.log("data :", faq);

//   console.log("Faq data", faq);

//   return {
//     props: {
//       faq,
//     },
//   };
// }

export default FAQ;

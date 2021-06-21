import React from "react";
import styles from "../FAQ/FAQ.module.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const FAQ = () => {
  return (
    <>
      <h1 className={styles.faqheading}>Frequently Asked Questions</h1>
      <div className={styles.faq}>
        <div className={styles.list1}>
          <Accordion
            className={styles.accord}
            style={{ backgroundColor: "#333333", color: "white" }}
          >
            <AccordionSummary
              className={styles.summary}
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit?
            </AccordionSummary>
            <AccordionDetails
              style={{ backgroundColor: "#FFFAED", color: "black" }}
            >
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit Duis
                aute irure dolor in reprehenderit in voluptate velit
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className={styles.accord}
            style={{ backgroundColor: "#333333", color: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit?
            </AccordionSummary>
            <AccordionDetails
              style={{ backgroundColor: "#FFFAED", color: "black" }}
            >
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit Duis
                aute irure dolor in reprehenderit in voluptate velit
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className={styles.accord}
            style={{ backgroundColor: "#333333", color: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit?
            </AccordionSummary>
            <AccordionDetails
              style={{ backgroundColor: "#FFFAED", color: "black" }}
            >
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit Duis
                aute irure dolor in reprehenderit in voluptate velit
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className={styles.accord}
            style={{ backgroundColor: "#333333", color: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit?
            </AccordionSummary>
            <AccordionDetails
              style={{ backgroundColor: "#FFFAED", color: "black" }}
            >
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit Duis
                aute irure dolor in reprehenderit in voluptate velit
              </p>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className={styles.list2}>
          <Accordion
            className={styles.accord}
            style={{ backgroundColor: "#333333", color: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit?
            </AccordionSummary>
            <AccordionDetails
              style={{ backgroundColor: "#FFFAED", color: "black" }}
            >
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit Duis
                aute irure dolor in reprehenderit in voluptate velit
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className={styles.accord}
            style={{ backgroundColor: "#333333", color: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit?
            </AccordionSummary>
            <AccordionDetails
              style={{ backgroundColor: "#FFFAED", color: "black" }}
            >
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit Duis
                aute irure dolor in reprehenderit in voluptate velit
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className={styles.accord}
            style={{ backgroundColor: "#333333", color: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit?
            </AccordionSummary>
            <AccordionDetails
              style={{ backgroundColor: "#FFFAED", color: "black" }}
            >
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit Duis
                aute irure dolor in reprehenderit in voluptate velit
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className={styles.accord}
            style={{ backgroundColor: "#333333", color: "white" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit?
            </AccordionSummary>
            <AccordionDetails
              style={{ backgroundColor: "#FFFAED", color: "black" }}
            >
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit Duis
                aute irure dolor in reprehenderit in voluptate velit
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FAQ;

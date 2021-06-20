import styles from "./styles.module.css";
import Tab from "./Tab";
import dots from './dots_data'

const Interactable = () => {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.personalised_heading}>
          <h1>Get Personalised</h1>
        </div>
        <div className={styles.split}>
          <div className={styles.tab_container}>
            <Tab />
          </div>

          <div className={styles.img_container}>
          {dots.map(dot => {
               return <div className = {styles.dots} key = {dot.id} style = {{top:`${dot.yPos}`,left:`${dot.xPos}`}}></div>
              
            })}
			

            <img
              className={styles.personalised_img}
              src='https://images.unsplash.com/photo-1585128792020-803d29415281?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
              alt='img'></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interactable;

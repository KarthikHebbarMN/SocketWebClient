import styles from "./styles.module.css";
import Tab from "./Tab";

const Interactable = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.split}>
          <div className={styles.left_div}>
            <section className={styles.heading}>
              <h1>Get Personalised</h1>
            </section>
            <section className={styles.tab}>
              <Tab />
            </section>
          </div>
          <div className={styles.right_div}>
            <div className={styles.tableDots}></div>
            <div className={styles.chairDots}></div>
            <div className={styles.floorDots}></div>
            <div className={styles.tvDots}></div>

            <img
              src='https://images.unsplash.com/photo-1585128792020-803d29415281?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGhvbWUlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
              alt='img'></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interactable;

import styles from "./styles.module.css";

const List = () => {
  return (
    <>
      <div className={styles.list_main}>
        <div className={styles.list}>
          <img
            className={styles.item_img}
            src='https://images.unsplash.com/photo-1573869908170-64b53a60d8da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZsb29yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
            alt='img'></img>
        </div>
        <div className={styles.list}>
          <img
            className={styles.item_img}
            src='https://images.unsplash.com/photo-1560780552-ba54683cb263?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZsb29yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
            alt='img'></img>
        </div>
        <div className={styles.list}>
          <img
            className={styles.item_img}
            src='https://images.unsplash.com/photo-1611072337226-1140ab367200?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvb3IlMjB0ZXh0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
            alt='img'></img>
        </div>
      </div>
    </>
  );
};
export default List;

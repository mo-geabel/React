import Styles from "./footer.module.css";
export default function Footer({ completed, total }) {
  return (
    <div className={Styles.footer}>
      <span className={Styles.item}>Completed Tasks : {completed}</span>
      <span className={Styles.item}>Total Tasks {total}</span>
    </div>
  );
}

import Styles from "./InnerContainer.module.css";
export default function InnerContainer({ children }) {
  return <div className={Styles.Inner}>{children}</div>;
}

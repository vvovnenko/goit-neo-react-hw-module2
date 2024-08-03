import styles from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, canReset }) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {canReset && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};
export default Options;

import { useEffect, useState } from "react";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

const DEFAULT_FEEDBACK = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(() => {
    if (window.localStorage.getItem("feedback-data") !== null) {
      return JSON.parse(window.localStorage.getItem("feedback-data"));
    }
    return { ...DEFAULT_FEEDBACK };
  });
  useEffect(() => {
    window.localStorage.setItem("feedback-data", JSON.stringify(feedback));
  }, [feedback]);
  const updateFeedback = (type) => {
    setFeedback({
      ...feedback,
      [type]: feedback[type] + 1,
    });
  };
  const resetFeedback = () => {
    setFeedback({ ...DEFAULT_FEEDBACK });
  };
  const totalFeedback = feedback.good + feedback.bad + feedback.neutral;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        canReset={!!totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;

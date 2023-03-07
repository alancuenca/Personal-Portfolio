import { timeline } from "../../constants/constants";
import "./Timeline.css";

function Timeline() {
  return (
    <div className="timeline">
      {timeline.map((item) => (
        <div className="timeline-item" key={item.year}>
          <div className="timeline-year">{item.year}</div>
          <div className="timeline-content">{item.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;

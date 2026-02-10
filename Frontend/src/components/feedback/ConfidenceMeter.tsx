import { getConfidenceTone } from "../../utils/confidenceScoring";

export function ConfidenceMeter({ value }: { value: number }) {
  const percentage = Math.round(value * 100);
  const tone = getConfidenceTone(value);

  return (
    <div className={`confidence-meter tone-${tone}`}>
      <div className="confidence-label">{percentage}% confidence</div>
      <div className="confidence-bar">
        <span style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

export function DisclaimerBanner({
  text = "Educational information only. Not for diagnosis or dosing."
}: {
  text?: string;
}) {
  return <div className="disclaimer-banner">{text}</div>;
}

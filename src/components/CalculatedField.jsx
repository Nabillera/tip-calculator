export default function CalculatedField({ value, label }) {
  return (
    <div className="calculated-field">
      <div className="calculated-label-div">
        <span className="calculated-label">{label}</span>
        <span>/ person</span>
      </div>
      <span className="calculated-amount">{value ? value : 0}</span>
    </div>
  );
}

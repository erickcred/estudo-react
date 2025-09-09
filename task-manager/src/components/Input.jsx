export default function Input(props) {
  return (
    <input
      className={`rounded-md outline-[var(--primary)] bg-[var(--secondary)]/10  ${props.className}`}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onChangeCapture={props.onChangeCapture}
      onKeyDown={props.onKeyDown}
      value={props.velue}
    />
  );
}

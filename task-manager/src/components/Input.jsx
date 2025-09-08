export default function Input(props) {
  return (
    <input
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onChangeCapture={props.onChangeCapture}
      onKeyDown={props.onKeyDown}
      value={props.velue}
    />
  );
}

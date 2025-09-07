export default function Button(props) {
  if (props.isLink)
    return (
      <a to={props.to} className={props.className}>
        {props.title}
      </a>
    );

  return (
    <button className={props.className} onClick={props.onClick}>
      {props.title}
    </button>
  );
}

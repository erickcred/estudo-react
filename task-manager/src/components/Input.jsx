export default function Input(props) {
  return (
    <div className="space-y-1">
      {props.label && (
        <label
          htmlFor={props.id}
          className="text-[var(--secondary)]/60 font-semibold"
        >
          {props.label}
        </label>
      )}

      <input
        className={`rounded-md outline-[var(--primary)] bg-[var(--secondary)]/10 placeholder:text-[var(--secondary)]/70  ${props.className}`}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onChangeCapture={props.onChangeCapture}
        onKeyDown={props.onKeyDown}
        value={props.velue}
      />
    </div>
  );
}

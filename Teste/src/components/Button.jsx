export const Button = ({ disabled, label="CLICK" }) => {
  return (
    <button disabled={disabled}>{label}</button>
  )
}

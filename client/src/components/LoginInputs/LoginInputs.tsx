import "./LoginInputs.css";

type LoginInputsProps = {
  svg: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginInputs = ({
  svg,
  type,
  name,
  value,
  onChange,
}: LoginInputsProps) => {
  return (
    <div className="LoginInputs input-container">
      <img src={svg} alt="name svg" />
      <input
        type={type}
        name={name}
        id={name}
        placeholder={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default LoginInputs;

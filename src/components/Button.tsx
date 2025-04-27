const Button = ({ label }: { label: string }) => {
  return (
    <button className="border border-primary backdrop-blur-md text-primary capitalize px-4 py-2 cursor-pointer">
      {label}
    </button>
  );
};

export default Button;

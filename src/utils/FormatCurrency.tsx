const FormatCurrency = ({ price }: { price: string }) => {
  return (
    <p className="text-lg font-semibold text-secondary">
      cost:{" "}
      {new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(parseFloat(price))}
    </p>
  );
};

export default FormatCurrency;

export function decimalCurrency(
  num: number,
  currency?: string,
  noCurrency?: boolean
) {
  return (
    (noCurrency ? "" : currency ? currency + " " : "USD ") +
    Number(num)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  );
}

export const formatCurrency = (
  amount: number | string,
  currency: string = "USD"
) => {
  const num = Number(amount);
  if (isNaN(num)) return "";
  const formatted = num % 1 === 0 ? num.toFixed(0) : num.toFixed(2);

  return `${currency} ${formatted}`;
};

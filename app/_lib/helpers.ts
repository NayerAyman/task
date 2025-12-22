export function formateCurrency(price: number): string {
  const result = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return result;
}

const CURRENTCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "AUD",
  style: "currency",
});
export function formatCurrency(number: number) {
  return CURRENTCY_FORMATTER.format(number);
}

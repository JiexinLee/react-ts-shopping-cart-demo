const CURRENTCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "AUD",
  style: "currency",
});
export function formatCurrency(number: number | undefined) {
  if (!number) return 0;
  return CURRENTCY_FORMATTER.format(number);
}

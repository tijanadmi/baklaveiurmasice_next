export function formatKilograms(grams) {
  return `${String(grams / 1000).replace(".", ",")} kg`;
}

export function formatPrice(price) {
  return `${String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} RSD`;
}

export function money(str) {
  if (!str) return '';

  return parseFloat(str, 10).toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1.')
    .replace(/.(\d{2})$/g, ',$1');
}

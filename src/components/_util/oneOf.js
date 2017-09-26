export default function (value, validateList) {
  return new Set(validateList).has(value);
}
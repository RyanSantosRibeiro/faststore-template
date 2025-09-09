export function objectToGraphQL(obj: Object) {
  return JSON.stringify(obj)
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/"([^"]*)"/g, '"$1"');
}

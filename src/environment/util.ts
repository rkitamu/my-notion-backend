// nullcheck
export function checkNullable<T>(value: T, key: string): NonNullable<T> {
  if (value !== null && value !== undefined) {
    return value;
  }
  throw new Error(`Environment variable ${key} is not defined`);
}

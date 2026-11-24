/** Small text helpers shared by templates. */

/** Join words as an English list: "a", "a and b", "a, b and c". */
export function listWords(a: string[]): string {
  return a.length < 2 ? a.join('') : `${a.slice(0, -1).join(', ')} and ${a[a.length - 1]}`;
}

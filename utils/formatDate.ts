export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-AU', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

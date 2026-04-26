/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: required to set JSON-LD data */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

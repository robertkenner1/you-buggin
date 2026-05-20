type SilhouetteProps = {
  bugId: string;
  label?: string;
  className?: string;
};

// Renders the PhyloPic silhouette SVG via CSS mask so we can color it
// with bg-* tokens (defaults to ink) and skip the white card background.
export function Silhouette({ bugId, label, className = '' }: SilhouetteProps) {
  const mask = `url('/illustrations/${bugId}-silhouette.svg')`;
  return (
    <div
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={`bg-ink ${className}`}
      style={{
        WebkitMaskImage: mask,
        maskImage: mask,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  );
}

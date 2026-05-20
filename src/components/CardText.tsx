type CardTextProps = {
  title: string;
  subtitle?: string;
};

// Standard text column inside a Card. The first row is always the title
// (font-medium leading-tight); an optional second row is the subtitle
// (text-sm text-muted leading-snug). Use this in every Card so the type
// hierarchy is identical across cards.
export function CardText({ title, subtitle }: CardTextProps) {
  return (
    <div className="flex-1 min-w-0">
      <div className="font-medium leading-tight">{title}</div>
      {subtitle && (
        <div className="text-sm text-muted leading-snug pt-1">{subtitle}</div>
      )}
    </div>
  );
}

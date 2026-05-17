type ProductImagePlaceholderProps = {
  className?: string;
  label?: string;
};

export function ProductImagePlaceholder({
  className = '',
  label = 'Drink',
}: ProductImagePlaceholderProps) {
  return (
    <div className={`product-img-placeholder ${className}`.trim()}>
      <span>{label}</span>
    </div>
  );
}

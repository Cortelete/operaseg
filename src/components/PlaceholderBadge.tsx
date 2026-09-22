import React from 'react';
import { AlertCircle } from 'lucide-react';

interface PlaceholderBadgeProps {
  label: string;
  className?: string;
  isInline?: boolean;
}

export const PlaceholderBadge: React.FC<PlaceholderBadgeProps> = ({
  label,
  className = '',
  isInline = false,
}) => {
  return (
    <span
      id={`placeholder-${label.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 30)}`}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-amber-50 text-amber-900 border border-amber-300/80 shadow-xs ${className}`}
      title="Informação a ser confirmada com a Operaseg"
    >
      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
      <span className="font-mono text-[11px] leading-tight">{label}</span>
    </span>
  );
};

import React from 'react';

type ColorBoxProps = {
  colorClass: string;
  name: string;
  hex: string;
};

const ColorBox = ({ colorClass, name, hex }: ColorBoxProps) => {
  return (
    <div className="flex flex-col">
      <div 
        className={`h-16 w-full rounded-md ${colorClass}`} 
        aria-label={`Color sample: ${name}`}
      ></div>
      <div className="mt-1 text-sm">
        <p className="font-medium">{name}</p>
        <p className="text-muted-foreground">{hex}</p>
      </div>
    </div>
  );
};

type ColorRowProps = {
  title: string;
  colors: {
    name: string;
    colorClass: string;
    hex: string;
  }[];
};

const ColorRow = ({ title, colors }: ColorRowProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {colors.map((color) => (
          <ColorBox
            key={color.name}
            colorClass={color.colorClass}
            name={color.name}
            hex={color.hex}
          />
        ))}
      </div>
    </div>
  );
};

export function ColorShowcase() {
  const brandColors = [
    { name: 'Primary', colorClass: 'bg-primary', hex: 'hsl(var(--primary))' },
    { name: 'Secondary', colorClass: 'bg-secondary', hex: 'hsl(var(--secondary))' },
    { name: 'Accent', colorClass: 'bg-accent', hex: 'hsl(var(--accent))' },
  ];

  const primaryShades = [
    { name: 'Primary 50', colorClass: 'bg-primary-50', hex: '#f0fdfa' },
    { name: 'Primary 100', colorClass: 'bg-primary-100', hex: '#ccfbf1' },
    { name: 'Primary 200', colorClass: 'bg-primary-200', hex: '#99f6e4' },
    { name: 'Primary 300', colorClass: 'bg-primary-300', hex: '#5eead4' },
    { name: 'Primary 400', colorClass: 'bg-primary-400', hex: '#2dd4bf' },
    { name: 'Primary 500', colorClass: 'bg-primary-500', hex: '#14b8a6' },
    { name: 'Primary 600', colorClass: 'bg-primary-600', hex: '#0d9488' },
    { name: 'Primary 700', colorClass: 'bg-primary-700', hex: '#0f766e' },
    { name: 'Primary 800', colorClass: 'bg-primary-800', hex: '#115e59' },
    { name: 'Primary 900', colorClass: 'bg-primary-900', hex: '#134e4a' },
  ];

  const secondaryShades = [
    { name: 'Secondary 50', colorClass: 'bg-secondary-50', hex: '#fff7ed' },
    { name: 'Secondary 100', colorClass: 'bg-secondary-100', hex: '#ffedd5' },
    { name: 'Secondary 200', colorClass: 'bg-secondary-200', hex: '#fed7aa' },
    { name: 'Secondary 300', colorClass: 'bg-secondary-300', hex: '#fdba74' },
    { name: 'Secondary 400', colorClass: 'bg-secondary-400', hex: '#fb923c' },
    { name: 'Secondary 500', colorClass: 'bg-secondary-500', hex: '#f97316' },
    { name: 'Secondary 600', colorClass: 'bg-secondary-600', hex: '#ea580c' },
    { name: 'Secondary 700', colorClass: 'bg-secondary-700', hex: '#c2410c' },
    { name: 'Secondary 800', colorClass: 'bg-secondary-800', hex: '#9a3412' },
    { name: 'Secondary 900', colorClass: 'bg-secondary-900', hex: '#7c2d12' },
  ];

  const utilityColors = [
    { name: 'Background', colorClass: 'bg-background', hex: 'hsl(var(--background))' },
    { name: 'Foreground', colorClass: 'bg-foreground', hex: 'hsl(var(--foreground))' },
    { name: 'Muted', colorClass: 'bg-muted', hex: 'hsl(var(--muted))' },
    { name: 'Muted FG', colorClass: 'bg-muted-foreground', hex: 'hsl(var(--muted-foreground))' },
    { name: 'Border', colorClass: 'bg-border', hex: 'hsl(var(--border))' },
  ];

  const gradients = [
    { name: 'Brand Gradient', colorClass: 'bg-gradient-brand', hex: 'Primary → Secondary' },
    { name: 'Brand Dark', colorClass: 'bg-gradient-brand-dark', hex: 'Accent → Primary' },
  ];

  return (
    <div className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold">Color System</h2>
      <p className="text-muted-foreground">
        Standardized color palette for consistent branding across the Markov International website.
      </p>
      
      <ColorRow title="Brand Colors" colors={brandColors} />
      <ColorRow title="Primary Shades" colors={primaryShades} />
      <ColorRow title="Secondary Shades" colors={secondaryShades} />
      <ColorRow title="Utility Colors" colors={utilityColors} />
      <ColorRow title="Gradients" colors={gradients} />
      
      <div className="pt-4 border-t">
        <h3 className="text-lg font-semibold mb-3">Usage Example</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-primary text-primary-foreground hover-state-primary rounded-md px-4 py-2 focus-visible-state">
            Primary Button
          </button>
          <button className="bg-secondary text-secondary-foreground hover-state-secondary rounded-md px-4 py-2 focus-visible-state">
            Secondary Button
          </button>
          <button className="bg-accent text-accent-foreground hover-state-accent rounded-md px-4 py-2 focus-visible-state">
            Accent Button
          </button>
        </div>
      </div>
    </div>
  );
} 
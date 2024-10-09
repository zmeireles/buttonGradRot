import React from 'react';

export interface ButtonRotGradProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  colorA?: string;
  colorB?: string;
  backgroundColor?: string;
  fontColor?: string;
  rotationSpeed?: number;
  coneAngle?: number;
  glowColor?: string;
  glowIntensity?: number;
  shadowSpread?: number;
  hoverShadowSpread?: number;
  lineWidth?: number;
  pulseSpeed?: number;
  hoverScale?: number;
  transitionSpeed?: number;
  fontSize?: string;
  fontWeight?: string | number;
  padding?: string;
  children: React.ReactNode;
}

const ButtonRotGrad: React.FC<ButtonRotGradProps> = ({
  colorA = '#008dd2',
  colorB = '#f46036',
  backgroundColor = '#000',
  fontColor = '#fff',
  rotationSpeed = 4,
  coneAngle = 90,
  glowColor = '#00ffff',
  glowIntensity = 0.5,
  shadowSpread = 10,
  hoverShadowSpread = 20,
  lineWidth = 2,
  pulseSpeed = 2,
  hoverScale = 1.05,
  transitionSpeed = 0.3,
  fontSize = '1rem',
  fontWeight = 'normal',
  padding = '0.5rem 1rem',
  children,
  className = '',
  ...props
}) => {
  const buttonStyle = {
    '--color-a': colorA,
    '--color-b': colorB,
    '--bg-color': backgroundColor,
    '--font-color': fontColor,
    '--rotation-speed': `${rotationSpeed}s`,
    '--cone-angle': `${coneAngle}deg`,
    '--glow-color': glowColor,
    '--glow-intensity': glowIntensity,
    '--shadow-spread': `${shadowSpread}px`,
    '--hover-shadow-spread': `${hoverShadowSpread}px`,
    '--line-width': `${lineWidth}px`,
    '--pulse-speed': `${pulseSpeed}s`,
    '--hover-scale': hoverScale,
    '--transition-speed': `${transitionSpeed}s`,
    '--font-size': fontSize,
    '--font-weight': fontWeight,
    '--padding': padding,
  } as React.CSSProperties;

  const roundedClass = className.split(' ').find(cls => cls.startsWith('rounded')) || 'rounded';

  return (
    <button
      className={`button-rot-grad ${className}`}
      style={buttonStyle}
      {...props}
    >
      <span className={`button-content ${roundedClass}`}>
        {children}
      </span>
    </button>
  );
};

export default ButtonRotGrad;
# ButtonRotGrad Component User Manual

## Overview

ButtonRotGrad is a highly customizable React component that creates a button with a rotating gradient border and a glowing effect. It's designed to add a dynamic and eye-catching element to your user interface.

## Props

The ButtonRotGrad component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| colorA | string | '#008dd2' | First color of the gradient |
| colorB | string | '#f46036' | Second color of the gradient |
| backgroundColor | string | '#000' | Background color of the button |
| fontColor | string | '#fff' | Text color of the button |
| rotationSpeed | number | 4 | Speed of the rotating gradient (in seconds) |
| coneAngle | number | 90 | Angle of the gradient cone (in degrees) |
| glowColor | string | '#00ffff' | Color of the glow effect |
| glowIntensity | number | 0.5 | Intensity of the glow effect (0-1) |
| shadowSpread | number | 10 | Spread of the shadow (in pixels) |
| hoverShadowSpread | number | 20 | Spread of the shadow on hover (in pixels) |
| lineWidth | number | 2 | Width of the rotating line (in pixels) |
| pulseSpeed | number | 2 | Speed of the glow pulsing effect (in seconds) |
| hoverScale | number | 1.05 | Scale factor when hovering (1 = no scale) |
| transitionSpeed | number | 0.3 | Speed of hover transitions (in seconds) |
| fontSize | string | '1rem' | Font size of the button text |
| fontWeight | string \| number | 'normal' | Font weight of the button text |
| padding | string | '0.5rem 1rem' | Internal padding of the button |
| className | string | '' | Additional CSS classes |

## Usage Examples

### Basic Usage

```jsx
import ButtonRotGrad from './components/ButtonRotGrad';

function App() {
  return (
    <ButtonRotGrad>
      Click me!
    </ButtonRotGrad>
  );
}
```

### Custom Colors and Glow

```jsx
<ButtonRotGrad
  colorA="#ff0000"
  colorB="#00ff00"
  backgroundColor="#333"
  fontColor="#fff"
  glowColor="#ffff00"
  glowIntensity={0.8}
>
  Neon Button
</ButtonRotGrad>
```

### Adjusting Rotation and Angle

```jsx
<ButtonRotGrad
  rotationSpeed={2}
  coneAngle={180}
  lineWidth={4}
>
  Fast Wide Rotation
</ButtonRotGrad>
```

### Custom Sizing and Padding

```jsx
<ButtonRotGrad
  fontSize="1.2rem"
  fontWeight="bold"
  padding="1rem 2rem"
  hoverScale={1.1}
>
  Large Button
</ButtonRotGrad>
```

### Rounded Corners

```jsx
<ButtonRotGrad className="rounded-full">
  Circular Button
</ButtonRotGrad>
```

### Slow Pulsing Glow

```jsx
<ButtonRotGrad
  glowColor="#ff00ff"
  glowIntensity={0.6}
  pulseSpeed={4}
  shadowSpread={15}
  hoverShadowSpread={25}
>
  Pulsing Glow
</ButtonRotGrad>
```

### Combining Multiple Custom Properties

```jsx
<ButtonRotGrad
  colorA="#00ff00"
  colorB="#ff00ff"
  backgroundColor="#222"
  fontColor="#fff"
  rotationSpeed={6}
  coneAngle={120}
  glowColor="#00ffff"
  glowIntensity={0.7}
  shadowSpread={12}
  hoverShadowSpread={20}
  lineWidth={3}
  pulseSpeed={3}
  hoverScale={1.08}
  transitionSpeed={0.4}
  fontSize="1.1rem"
  fontWeight="600"
  padding="0.75rem 1.5rem"
  className="rounded-lg"
>
  Super Custom Button
</ButtonRotGrad>
```

## Best Practices

1. **Accessibility**: Ensure that the contrast between the button text and background color is sufficient for readability.

2. **Performance**: Be mindful of using too many buttons with complex animations on a single page, as it may impact performance on lower-end devices.

3. **Consistency**: Try to maintain a consistent style across your application. You can create preset configurations for different button types (e.g., primary, secondary, warning).

4. **Responsiveness**: Adjust the button size and padding for different screen sizes using media queries or responsive design techniques.

5. **Purpose**: Use this button for important call-to-action elements where you want to draw the user's attention.

## Troubleshooting

- If the rotation or glow effects are not visible, ensure that the `lineWidth` is greater than 0 and the `glowIntensity` is greater than 0.
- If the button appears square when you're trying to make it rounded, make sure you're passing the appropriate `className` (e.g., `"rounded-full"` for a circular button).
- If the text is hard to read, try adjusting the `fontColor`, `backgroundColor`, or `glowColor` for better contrast.

## Conclusion

The ButtonRotGrad component offers a wide range of customization options to create visually appealing and interactive buttons. Experiment with different combinations of props to achieve the desired look and feel for your application.
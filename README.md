# react-horizontal-stepper

A very light weight and simple horizontal stepper for react apps.

# Insatallation

```bash
npm install --save react-horizontal-stepper
# or
yarn add react-horizontal-stepper
```

Then just import into your file as:

```jsx
import Stepper from "react-horizontal-stepper";
```

# Usage

```jsx
render() {
  return (
    <Stepper
      currentStep={currentStep}
      steps={getSteps()}
      fontFamily="Roboto"
      textColor="#fff"
      activeColor="yellow"
    />
  );
}
```

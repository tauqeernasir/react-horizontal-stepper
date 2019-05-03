# react-horizontal-stepper

A very light weight and simple horizontal stepper for react apps.

# Screenshot

![](https://user-images.githubusercontent.com/43640384/57127415-d1e72d80-6da9-11e9-938d-12937d1171c2.png)

# Insatallation

```bash
npm install --save react-horizontal-stepper
# or
yarn add react-horizontal-stepper
```

Then just import into your file as:

```jsx
import { Stepper } from "react-horizontal-stepper";
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

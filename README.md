# react-horizontal-stepper

[![Build Status](https://travis-ci.org/jskod/react-horizontal-stepper.svg?branch=master)](https://travis-ci.org/jskod/react-horizontal-stepper)

A very light weight and simple horizontal stepper for react apps.

# Screenshot

![screenshot](https://user-images.githubusercontent.com/43640384/57127415-d1e72d80-6da9-11e9-938d-12937d1171c2.png)

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

const getSteps = () => ['Step 1', 'Step 2']

render() {
  return (
    <Stepper
      currentStep={currentStep}
      steps={getSteps()}
      fontFamily="Roboto"
      textColor="#fff"
      activeColor="yellow"
      onItemClick={(step, name) => {
        console.log(`${step} has name '${name}'`)
      }}
    />
  );
}
```

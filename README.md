# react-clock-component

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

This repo holds a library that allows you to display real time clock on your application without any hassle.

First step is to specify the format in which you want to display the clock as one of the props.

Check out the various format from moment(https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/) and pass it as it. 

Second step is to pass a delay timer as one of the props in order to refresh your clock. 

And now you're good to go...

[**Live Demo**](https://shubh-37.github.io/clock-library/)

## Installation:

```bash
npm install react-clock-component --save-dev
```

or

```bash
yarn add -D react-clock-component
```

## Usage :

Add `Clock` to your component:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Clock } from 'react-clock-component'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h2>Default clock</h2>
            <Clock format='LL' delayTimer={1000}/>
        </div>
        <hr />
        <div>
            <h2>Clock with predefined value</h2>
            <Clock format='LL' delayTimer={1000} />
        </div>
    </React.StrictMode>,
)

```

[npm-url]: https://www.npmjs.com/package/react-clock-component
[npm-image]: https://img.shields.io/npm/v/react-clock-component
[github-license]: https://img.shields.io/github/license/shubh-37/react-clock-component
[github-license-url]: https://github.com/shubh-37/react-clock-component/blob/master/LICENSE
[github-build]: https://github.com/shubh-37/react-clock-component/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/shubh-37/react-clock-component/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-clock-component
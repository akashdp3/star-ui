# star-ui

[//]: # '![CI](https://github.com/akashdsamantra/star-ui/workflows/CI/badge.svg?branch=main)'

This is a design system. Feel free to raise any issue or PR.

## Introduction

So `star-ui` is a monorepo created using `yarn workspace`. There are 3 packages:

1. docs
1. star-ui

- `docs` is documentation for star-ui. It should automatically create documentation from component. Possibly I can use the storybook docs addon directly. I am not sure. The idea is to generate it, not write it manually.
- `star-ui` is the root package in the project. This will contain all components.

## Installation

using npm

```
npm install react-star-ui
```

or yarn

```
yarn add react-star-ui
```

## Getting Started

Clone the repo

```
git clone git@github.com:akashdsamantra/star-ui.git
```

After that, run the below command in the root directory to install all dependencies across all packages

```
yarn install
```

Run the below command to run storybook server and start working:

```
yarn start-docs
```

Cheers 🍻

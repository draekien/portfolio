<p align="center">
  <img src="docs/wpei-logo.svg" alt="the logo of wpei.me">
</p>

<h1 align="center">Portfolio</h1>

![checkly](https://api.checklyhq.com/v1/badges/checks/ed419004-6723-4a8c-8e60-2ddf2bc64c6a?style=flat&theme=default)

- [Introduction](#introduction)
- [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [CI/CD](#cicd)
- [Technologies used](#technologies-used)

## Introduction

Welcome to the repository for my [portfolio website](https://wpei.me), where I showcase
other projects I have worked on, as well as publish articles in a blog format.

## Getting started

Follow the steps below to get started with local development:

1. Clone or fork this repository
2. Run `yarn` to install packages
3. Run `yarn dev` to start the project

### Project structure

```text
|-components -> the building block components
|-features   -> the showcased (featured) projects
|-hooks      -> custom react hooks
|-lib        -> third party javascript functions
|-pages      -> the pages of the website
|-public     -> the public assets for the website
|-styles     -> the css files
```

### CI/CD

This project uses mainline deployment for CI/CD. This is handled by
Vercel as this is a next js project.

## Technologies used

This project was built using [NextJS](https://nextjs.org/) and uses the following
technologies:

- [Theme-UI](https://theme-ui.com/) - for creating the design system
- [Typescript](https://www.typescriptlang.org/) - for strongly typed javascript
- [Yarn](https://yarnpkg.com/) - for dependency management
- [Vercel](https://vercel.com) - for deployment and hosting

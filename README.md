<p align="center">
  <h1 align="center">Cloudinary uploader</h1>
  <p align="center">
    This package provides an easy way to upload images and videos from the front-end to the Cloudinary platform.
  </p>
</p>
<br/>

<p align="center">
<a href="https://github.com/renaldodev/cloudinary/actions?query=branch%3Amaster"><img src="https://github.com/renaldodev/cloudinary/actions/workflows/main.yml/badge.svg?event=push&branch=master" alt="cloudinary upload CI status" /></a>
<a href="https://twitter.com/renaldodev" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@renaldodev-4BBAAB.svg" alt="Created by Renaldo Mateus"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/renaldodev/cloudinary" alt="License"></a>
<a href="https://www.npmjs.com/package/@renaldodev/cloudinary" rel="nofollow"><img src="https://img.shields.io/npm/dw/@renaldodev/cloudinary.svg" alt="npm"></a>
<a href="https://www.npmjs.com/package/@renaldodev/cloudinary" rel="nofollow"><img src="https://img.shields.io/github/stars/renaldodev/cloudinary" alt="stars"></a>
</p>

## Table of contents

<!-- The full documentation is available both on the [official documentation site](https://@renaldodev/cloudinary.js.org/) (recommended) and in `README.md`.

#### Go to [@renaldodev/cloudinary.js.org](https://@renaldodev/cloudinary.js.org) >> -->

- [Introduction](#introduction)
- [Installation](#installation)
  - [Requirements](#requirements)
  - [Node/npm](#from-npm)
- [Basic usage](#basic-usage)
- [References](#references)

## Introduction

*Cloudinary Uploader* is an npm package that allows you to easily upload and delete images using Cloudinary's cloud-based media management services.  

With Cloudinary Uploader, you can quickly and easily upload your images to the Cloudinary platform, where they will be automatically optimized for fast delivery on any device. The package provides a simple API that allows you to specify the file you want to upload, as well as any additional parameters you need for customization, such as cropping or resizing.  

Deleting images is just as easy with Cloudinary Uploader. Simply provide the public ID of the image you want to delete, and the package will take care of the rest.  Cloudinary Uploader is perfect for developers who want to streamline their image management workflows and take advantage of the powerful features offered by Cloudinary.

Whether you're building a **web or mobile** app, this package can help you save time and hassle by simplifying your image upload and deletion process.

## Installation

### Requirements

- Cloudinary account
  - You can create a cloudinary account [here](https://cloudinary.com/)
- Web

  - ReactJS
  - VueJS
  - AngularJS

- Mobile
  - React Native CLI
  - Expo

### From `npm`

```sh
npm install @renaldodev/cloudinary       # npm
yarn add @renaldodev/cloudinary          # yarn
pnpm add @renaldodev/cloudinary          # pnpm
```

## Basic usage

Creating a simple image upload

```ts
import { Cloudinary } from "@renaldodev/cloudinary";

// Create a cloudinary object and set your configuration
// Get the cloudinary configuration from the cloudinary platform
const cloudinary = new Cloudinary({
  cloud_name: "xxxx",
  cloud_api_key: "00000000",
  cloud_api_secret: "xxxxxxx",
})

//uploading a base64 image
// Where photos on secound param is a cloudinary preset more information visit https://cloudinary.com/documentation/upload_presets
cloudinary
  .upload("data:image/jpeg;base64,/9j/...", "photos") 
  .then((res) => {
   console.log("successfully uploaded")
  })
  .catch(console.error);

  
```

Deleting an image from the cloudinary

```ts
import { Cloudinary } from "@renaldodev/cloudinary";

// Create a cloudinary object and set your configuration
// Get the cloudinary configuration from the cloudinary platform
const cloudinary = new Cloudinary({
  cloud_name: "xxxx",
  cloud_api_key: "00000000",
  cloud_api_secret: "xxxxxxx",
})

const imagePublicID="dog"
cloudinary
  .destroy(imagePublicID)
  .then((res) => {
   console.log("successfully deleted")
  })
  .catch(console.error);

```

## References

This package was developed to simplify the process of uploading and deleting files from the front-end to the Cloudinary platform.

You can find more information about cloudinary services and it tools in Cloudinary [official web site](https://cloudinary.com/)

## A simple application for exploring forms with Formik

This was created part of a technical task. I haven't worked much with forms before, but I decided to get into Formik to learn how better handle forms on a scale (with a frienly API).

Technologies used:

- React
- Typescript
- Material UI
- Formik
- Jest (just wrote one test since there is not much business logic)

## Architecture

The UI code architecture has been incpired the [atomic design model](https://atomicdesign.bradfrost.com/chapter-2/) by Brad Forst. The UI is entirely separated to make it able to be extracted from this repo in case it would be reused elsewhere. It is of course written in material ui with few changes, so who would 🤷

The business logic has been put under `src/forms` for the one and only form. The logic is then used in `src/components/ContactForm`, which is also consuming the UI from `src/ui`.

## How to run

This project was made using CRA, so you can run it locally using `npm run start`. No external APIs are being hit in this application.

## What's there todo here?

There are a bunch of TODOs as the application is not fully completed. It's to serve as an early representation of a finished product. Important work to get done is a better abstraction to ease the implementation of new forms without havint to repeat yourself until your eyes and fingers bleed 🩸😭

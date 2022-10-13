## A simple application for exploring forms with Formik

This was created part of a technical task. I haven't worked much with forms before, but I decided to get into Formik to learn how better handle forms on a scale (with a frienly API).

Technologies used:

- React
- Typescript
- Material UI
- Formik
- Jest (just wrote one test since there is not much business logic)

## How to run

This project was made using CRA, so you can run it locally using `npm run start`. No external APIs are being hit in this application.

When starting to look through the code, I advice you to just start in App.tsx and browse through the components from top-down, as the most complex components are deeper in the component tree.

## Architecture

### UI

The UI code architecture has been incpired the [atomic design model](https://atomicdesign.bradfrost.com/chapter-2/) by Brad Forst. The UI is entirely separated to make it able to be extracted from this repo in case it would be reused elsewhere. It is of course written in material ui with few changes, so who would 🤷.

I prefer nesting components in dot-syntax to make them more readable. This is also done to make the developer prefer going for a compound-component style of development which I believe is much better for scale.

### App logic

The business logic has been put under `src/forms` for the one and only form. The logic is then used in `src/components/ContactForm`, which is also consuming the UI from `src/ui`.

The pattern followed is a very simple version of "The Clean Architecture" (an onion type architecture), but lacking a lot since the application created was so simple and not in need of much business logic.

## What's there todo here?

There are a bunch of TODOs as the application is not fully completed. It's to serve as an early representation of a finished product.

Mainly components/forms/ContactForm should be refactored to smaller pieces. What I'd like to have done is a better abstraction to ease the implementation of new forms without havint to repeat yourself until your eyes and fingers bleed 🩸😭

However, the hypothetical application may never use more than one form, making my abstraction hell a total unnecessity.

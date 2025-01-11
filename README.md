# Next.js 15 Router.push Error: Route not found

This repository demonstrates a common error encountered in Next.js 15 applications when using the `router.push()` method to navigate between pages.  The error occurs when attempting to navigate to a route that does not exist within the `pages` directory.

## Problem

In the `pages/about.js` file, clicking the button attempts to navigate to `/contact`.  If a `/contact.js` file is not present within the `pages` directory, Next.js will throw an error. 

## Solution

The provided solution demonstrates two approaches:

1. **Adding the missing route:** The most straightforward solution is to create a `/contact.js` file within the `pages` directory.

2. **Adding a fallback or error handling:** Alternatively, you can add logic to check if the route exists before attempting to navigate.  This is useful when dealing with dynamic routes or conditional navigation.

This example provides a comprehensive understanding of how to resolve this common navigation issue in Next.js 15 apps.
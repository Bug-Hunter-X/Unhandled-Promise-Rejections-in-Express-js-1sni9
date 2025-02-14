# Unhandled Promise Rejections in Express.js

This repository demonstrates a common error in Express.js applications: unhandled promise rejections.  Unhandled promise rejections can lead to crashes or unexpected behavior, making them difficult to debug.  This example shows how to properly handle promise rejections to prevent these issues. 

## Bug Description

The `bug.js` file contains an Express.js application with a route handler that uses a promise but doesn't handle potential rejection. If the promise rejects, the application will not crash immediately but may show unexpected behavior or fail silently.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle promise rejections using `.catch()` to gracefully handle errors and prevent unexpected behavior.  Always handle promise rejections to ensure robustness in your applications.
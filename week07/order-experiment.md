# Middleware Order Experiment

## What I Changed

I intentionally moved the apiKeyAuth middleware after the controller in the POST /tasks route.

Original route:

router.post("/", apiKeyAuth, validateTask, tasksController.createTask);

Changed route:

router.post("/", tasksController.createTask, apiKeyAuth);

---

## What Broke

The controller executed before the API key validation middleware.

This allowed tasks to be created even when the request did not include a valid API key.

The middleware protection no longer worked correctly.

---

## Why It Broke

Express executes middleware in the order it is listed in the route.

Because the controller was placed before apiKeyAuth, the request reached the controller first and sent a response before the authorization middleware had a chance to run.

Middleware must run before controllers when validation or authorization is required.

---

## What Error Occurred

No Express error was thrown, but the route behavior became incorrect.

Unauthorized users were able to create tasks because authentication was skipped.

---

## Fix

I moved apiKeyAuth back before the controller.

Correct route:

router.post("/", apiKeyAuth, validateTask, tasksController.createTask);

This restored proper authorization behavior.
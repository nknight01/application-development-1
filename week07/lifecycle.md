# Request Lifecycle Analysis

## Valid POST request to /tasks with correct API key

1. The client sends a POST request to /tasks.
2. Express receives the request in server.js.
3. express.json() parses the JSON body.
4. The logger middleware records the request method and path.
5. The timing middleware starts tracking request duration.
6. The apiKeyAuth middleware checks for the x-api-key header.
7. The API key is correct, so the request continues.
8. The validateTask middleware checks if the required title field exists.
9. Validation passes, so the controller executes.
10. The createTask controller creates a new task object.
11. The server sends a successful JSON response back to the client.
12. The timing middleware logs how long the request took.

---

## POST /tasks without required field

1. The client sends a POST request to /tasks.
2. Express receives the request.
3. express.json() parses the request body.
4. Logger middleware logs the request.
5. Timing middleware starts tracking request time.
6. apiKeyAuth middleware checks the API key.
7. The API key is valid, so processing continues.
8. validateTask middleware checks for the title field.
9. The title field is missing.
10. Middleware returns a 400 Bad Request response.
11. The controller does not execute.
12. Timing middleware logs the completed request time.

---

## POST /tasks with missing API key

1. The client sends a POST request to /tasks.
2. Express receives the request.
3. express.json() parses the request body.
4. Logger middleware logs the request.
5. Timing middleware starts tracking request duration.
6. apiKeyAuth middleware checks for the x-api-key header.
7. The API key is missing or invalid.
8. Middleware returns a 401 Unauthorized response.
9. The validateTask middleware does not run.
10. The controller does not execute.
11. Timing middleware logs the completed request time.
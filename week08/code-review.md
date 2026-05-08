# Code Review Reflection

## 1. What parts of your code were hardest to read?

The controller files were the hardest to read because they originally contained multiple responsibilities at once, including validation, business logic, and error handling. This made the functions longer and harder to follow step-by-step.

---

## 2. Where did you duplicate logic?

Some validation checks and error responses were duplicated across multiple routes and controllers. For example, checking for required fields or returning error responses was repeated instead of being centralized in middleware.

---

## 3. What naming improvements did you make?

I improved variable and function names to be more descriptive and consistent. For example, generic names like item or data were replaced with clearer names like task, user, or updatedTask, which better describe their purpose.

---

## 4. What documentation was missing before?

Before refactoring, there was no clear API documentation describing endpoints, request formats, or expected responses. Error handling formats were also not consistently documented, making it harder to understand how the API behaves in different situations.

---

## 5. If another developer inherited this API, what would confuse them?

Another developer might be confused by:
- Inconsistent structure in earlier versions of the controllers
- Middleware order dependency (authorization and validation must be in the correct order)
- Lack of initial documentation before Week 8 improvements
- Separation of logic across multiple files without clear comments initially

The refactored version improves clarity, but earlier versions required more context to understand how requests flow through the system.
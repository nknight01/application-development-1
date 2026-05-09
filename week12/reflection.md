# Week 12 Reflection

## 1. What is the difference between authentication and authorization?

Authentication is the process of verifying who a user is (for example, logging in with a username and password). Authorization is the process of determining what an authenticated user is allowed to do within the system.

---

## 2. Why does /admin return 403 for a regular user instead of 401?

A 401 error means the user is not logged in at all. A 403 error means the user is logged in but does not have permission. A regular user is authenticated but not authorized to access admin-only routes, so 403 is used.

---

## 3. Why is ownership checking important?

Ownership checking ensures that users can only access or modify resources that belong to them. This prevents users from accessing or changing other users’ data, which is important for security and data protection.

---

## 4. What is the difference between role-based access and ownership-based access?

Role-based access control is based on the user’s role (such as admin or user) and determines permissions at a broad level. Ownership-based access control checks whether the user owns a specific resource, giving more fine-grained control over individual data items.

---

## 5. Why should authorization checks happen on the server instead of the client?

Authorization checks must happen on the server because the client can be modified or bypassed by users. The server is the trusted source of truth, so enforcing permissions there ensures security and prevents unauthorized access.
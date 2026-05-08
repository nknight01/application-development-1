# API Error Handling

## Standard Error Format

All API errors will follow this JSON structure:

```json id="k2n9wd"
{
  "status": 400,
  "error": "Bad Request",
  "message": "Detailed error description here",
  "timestamp": "2026-05-08T00:00:00Z"
}
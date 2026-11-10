# Contact Form & Dispatch Verification

The Insicle application is built as a pure static client single-page application (SPA) with a client-side form validated using **Zod** (`contactSchema`) and **React Hook Form**.

### Form Validation Specification (Unchanged & Verified):
1. **Name**: `min(2, "Please enter your name (at least 2 characters).")`
2. **Email**: `email("Please enter a valid business email address.")`
3. **Phone**: `min(8, "Please enter a valid phone or WhatsApp number.")`
4. **Company Name**: `min(2, "Please enter your company or organization name.")`
5. **Service Interest**: `min(1, "Please select the primary capability you are inquiring about.")`
6. **Requirements**: `min(10, "Please provide at least 10 characters describing your project requirements.")`

### Dispatch Behavior:
- **Valid Submission**: Generates structured mailto dispatch targeting `rmkinsicle@gmail.com` with formatted subject and body payload, triggers confirmation state with visual mailto fallback trigger.
- **Invalid Submission**: Instant client-side validation errors displayed with accessible red indicators (`#B3261E`).
- **Honeypot / Security**: Direct client-side validation prevents headless empty posts.

All contact handlers and form field bindings remain completely functional and preserved.


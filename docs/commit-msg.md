# Commit Message Rules

### 1. Body Rules

- **`body-leading-blank`**: Requires a blank line before the commit body.

  - ✅ `"feat: add feature\n\nThis feature..."`
  - ❌ `"feat: add feature\nThis feature..."`

- **`body-max-line-length`**: Limits each line in the commit body to **100 characters**.
  - ✅ `"Good detailed body... (≤100 chars)"`
  - ❌ `"Very long body line exceeding 100 chars...."`

### 2. Scope Rules

- **`scope-case`**: Enforces lowercase scope.
  - ✅ `"feat(auth): add login"`
  - ❌ `"feat(Auth): add login"`

### 3. Subject Rules

- **`subject-case`**: Prevents capitalized subjects.

  - ✅ `"fix: improve performance"`
  - ❌ `"fix: Improve performance"`

- **`subject-empty`**: Subject must not be empty.

  - ✅ `"feat: add API"`
  - ❌ `"feat:"`

- **`subject-full-stop`**: Subject must not end with a period (`.`).
  - ✅ `"fix: update docs"`
  - ❌ `"fix: update docs."`

### 4. Type Rules

- **`type-case`**: Enforces lowercase type.

  - ✅ `"fix: update deps"`
  - ❌ `"Fix: update deps"`

- **`type-empty`**: Type must not be empty.

  - ✅ `"feat: add logging"`
  - ❌ `": add logging"`

- **`type-enum`**: Only allows specific commit types:
  - Allowed: `"build"`, `"chore"`, `"ci"`, `"docs"`, `"feat"`, `"fix"`, `"perf"`, `"refactor"`, `"revert"`, `"style"`, `"test"`, `"translation"`, `"security"`, `"changeset"`
  - ✅ `"feat: new feature"`
  - ❌ `"new: something"`

# Hono.js + Bun.js Boilerplate

## Dev

The dev script is used for local development. It runs the bun command with the --hot flag to enable hot module replacement, and it points to the src/index.ts file. This is helpful for quickly iterating and testing changes during development.

To execute the dev script, use the following command:

```bash
bun dev
```

## Production

The start script is typically used for running your project in a production or deployment environment. Similar to the dev script, it also runs the bun command, but without the --hot flag, indicating that it's meant for a stable production environment.

To execute the start script, use the following command:

```bash
bun dev
```

## lint

The lint script is used for running ESLint on the src directory. ESLint is a popular linter tool for JavaScript and TypeScript, which helps enforce coding style and identify potential issues in your code.

To execute the lint script and check your code for linting errors, use the following command:

```bash
bun lint
```

## Pre commit

The prepare script is used for setting up Husky hooks. Husky is a tool that enables you to run scripts at specific git hooks to ensure code quality and consistency.

To execute the prepare script, use the following command:

```bash
bun prepare
```

## Testing the endpoints

The test script is used for running tests using Jest, a popular JavaScript testing framework. Jest is commonly used for writing and executing unit and integration tests for your code.

```bash
bun test
```

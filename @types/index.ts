/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "hono" {
  interface ContextVariableMap {
    validatedQuery: any;
    validatedBody: any;
    validatedParams: any;
  }
}

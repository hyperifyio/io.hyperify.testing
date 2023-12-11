**Join our [Discord](https://discord.gg/UBTrHxA78f) to discuss about our software!**

# fi.hg.jest

HG's additions to jest testing framework as a git submodule

This add on introduces these matchers:

 * `expect( something ).toBeIsoDateString()` tests for a string data in 
   standard format, e.g. `YYYY-MM-DDTHH:MM:SS`.
 * `expect( something).toBeNonEmptyString()` tests for a non-empty string
 * `expect( something).toBeString()` tests for a string
 * `expect( something).toBeArray()` tests for a any[]
 * `expect( something).toBeStringArray()` tests for a string[]
 * `expect( something).toBeNumberArray()` tests for a number[]
 * `expect( something).toBeNumber()` tests for a number
 * `expect( something).toBeBoolean()` tests for a boolean
 * `expect( something).toBeRegularObject()` tests for a regular object

Your test file must also import:

```typescript
import "../fi/hg/jest/matchers/index.d";
import "../fi/hg/jest/matchers";
```

And your main Jest configuration must include `setupFilesAfterEnv`:

```javascript
/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    // ...
    
    setupFilesAfterEnv: [
        "./src/fi/hg/jest/matchers/index.ts"
    ]
    
};
```

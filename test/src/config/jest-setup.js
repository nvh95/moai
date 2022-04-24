// Temporary convert to `.js` to avoid using `tsc`, since we use `@swc/jest`, `.ts` does not help much in this file
import "@testing-library/jest-dom";

import { jestPreviewConfigure } from "jest-preview";

jestPreviewConfigure({
	// TODO: Can we do better?
	externalCss: ["../core/dist/bundle.css"],
});

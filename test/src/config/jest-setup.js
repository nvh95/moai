import "@testing-library/jest-dom";

import { jestPreviewConfigure } from "jest-preview";

jestPreviewConfigure({
	// TODO: Can we do better?
	externalCss: ["../core/dist/bundle.css"],
});

import { storiesOf } from "@storybook/react";
import { Button } from "../button/button";
import { toast } from "./toast";

storiesOf("Toast", module).add("Main", () => (
	<Button onClick={() => toast("success", "Hello")}>Hello</Button>
));
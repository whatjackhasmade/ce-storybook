import React from "react";
import Button from "./button";

const alertText = e => {
	e.preventDefault();
	alert("You clicked the button");
};

export const basicButton = () => <Button>Basic button</Button>;
export const secondaryButton = () => (
	<Button variant="secondary">Secondary button</Button>
);
export const tertiaryButton = () => (
	<Button variant="tertiary">Tertiary button</Button>
);
export const functionButton = () => (
	<Button onClick={alertText}>Click me</Button>
);
export const linkedButton = () => <Button href="/route">Link to route</Button>;

export default {
	component: Button,
	title: "Button"
};

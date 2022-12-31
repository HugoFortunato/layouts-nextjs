// Button.stories.js|jsx

import React from "react";
import { Story } from "@storybook/react/types-6-0";

import { Button, ButtonProps } from ".";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Button",
  component: Button,
};

export const Primary: Story<ButtonProps> = (props) => (
  <Button {...props}>Primary</Button>
);

Primary.args = {
  color: "primary",
};

export const Secondary: Story<ButtonProps> = (props) => (
  <Button {...props}>Secondary</Button>
);

Secondary.args = {
  color: "secondary",
};

export const Disabled: Story<ButtonProps> = (props) => (
  <Button {...props}>Disabled</Button>
);

Disabled.args = {
  disabled: true,
};

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Error = Template.bind({});
Error.args = {
  title: 'Title fsdfdf',
  text: 'Description fsdfgdfg',
  theme: TextTheme.ERROR
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title fsdfdf',
  text: 'Description fsdfgdfg'
};
export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title fsdfdf'
};
export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Description fsdfgdfg'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title fsdfdf',
  text: 'Description fsdfgdfg'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Title fsdfdf'
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Description fsdfgdfg'
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

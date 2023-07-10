import { Meta, StoryFn } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
    title: 'Example/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' },
        fontColor: { control: 'color'}
    },
    tags: ['autodocs'],
} as Meta<typeof MyLabel>

const Templete: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Templete.bind({});
Basic.args = {
    size: 'h3',
    allCaps: true
}

export const AllCaps = Templete.bind({});
AllCaps.args = {
    size: 'h3',
    allCaps: false
}

export const Secondary = Templete.bind({});
Secondary.args = {
    size: 'h3',
    color: 'secondary'
}

export const Tertiary = Templete.bind({});
Tertiary.args = {
    size: 'h3',
    color: 'tertiary'
}

export const CustomFontColor = Templete.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
}
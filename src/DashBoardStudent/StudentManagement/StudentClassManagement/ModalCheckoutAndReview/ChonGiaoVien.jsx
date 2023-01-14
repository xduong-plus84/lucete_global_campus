import React, { useState } from "react";
import { Cascader } from "antd";
const options = [
  {
    value: "Angel Aura",
    label: "Angel Aura",
    children: [
      {
        value: "Mr.Stephen_1",
        label: "Mr.Stephen_1",
      },
      {
        value: "Ms.Rose_1",
        label: "Ms.Rose_1",
      },
    ],
  },
  {
    value: "Emerald",
    label: "Emerald",
    children: [
      {
        value: "Mr.Stephen_2",
        label: "Mr.Stephen_2",
      },
      {
        value: "Ms.Rose_2",
        label: "Ms.Rose_2",
      },
    ],
  },
  {
    value: "Amazonite",
    label: "Amazonite",
    children: [
      {
        value: "Mr.Stephen_3",
        label: "Mr.Stephen_3",
      },
      {
        value: "Ms.Rose_3",
        label: "Ms.Rose_3",
      },
    ],
  },
  {
    value: "Rose quartz",
    label: "Rose quartz",
    children: [
      {
        value: "Mr.Stephen_4",
        label: "Mr.Stephen_4",
      },
      {
        value: "Ms.Rose_4",
        label: "Ms.Rose_4",
      },
    ],
  },
  {
    value: "Citrine",
    label: "Citrine",
    children: [
      {
        value: "Mr.Stephen_5",
        label: "Mr.Stephen_5",
      },
      {
        value: "Ms.Rose_5",
        label: "Ms.Rose_5",
      },
    ],
  },
  {
    value: "Tiger eye",
    label: "Tiger eye",
    children: [
      {
        value: "Mr.Stephen_6",
        label: "Mr.Stephen_6",
      },
      {
        value: "Ms.Rose_6",
        label: "Ms.Rose_6",
      },
    ],
  },
  {
    value: "Malachite",
    label: "Malachite",
    children: [
      {
        value: "Mr.Stephen_7",
        label: "Mr.Stephen_7",
      },
      {
        value: "Ms.Rose_7",
        label: "Ms.Rose_7",
      },
    ],
  },
  {
    value: "Sunstone",
    label: "Sunstone",
    children: [
      {
        value: "Mr.Stephen_8",
        label: "Mr.Stephen_8",
      },
      {
        value: "Ms.Rose_8",
        label: "Ms.Rose_8",
      },
    ],
  },
  {
    value: "Labradorite",
    label: "Labradorite",
    children: [
      {
        value: "Mr.Stephen_9",
        label: "Mr.Stephen_9",
      },
      {
        value: "Ms.Rose_9",
        label: "Ms.Rose_9",
      },
    ],
  },
  {
    value: "Ruby",
    label: "Ruby",
    children: [
      {
        value: "Mr.Stephen_10",
        label: "Mr.Stephen_10",
      },
      {
        value: "Ms.Rose_10",
        label: "Ms.Rose_10",
      },
    ],
  },
  {
    value: "Moonstone",
    label: "Moonstone",
    children: [
      {
        value: "Mr.Stephen_11",
        label: "Mr.Stephen_11",
      },
      {
        value: "Ms.Rose_11",
        label: "Ms.Rose_11",
      },
    ],
  },
  {
    value: "Howlite",
    label: "Howlite",
    children: [
      {
        value: "Mr.Stephen_12",
        label: "Mr.Stephen_12",
      },
      {
        value: "Ms.Rose_12",
        label: "Ms.Rose_12",
      },
    ],
  },
  {
    value: "Larimar",
    label: "Larimar",
    children: [
      {
        value: "Mr.Stephen_13",
        label: "Mr.Stephen_13",
      },
      {
        value: "Ms.Rose_13",
        label: "Ms.Rose_13",
      },
    ],
  },
  {
    value: "Amethyst",
    label: "Amethyst",
    children: [
      {
        value: "Mr.Stephen_14",
        label: "Mr.Stephen_14",
      },
      {
        value: "Ms.Rose_14",
        label: "Ms.Rose_14",
      },
    ],
  },
  {
    value: "Sapphire",
    label: "Sapphire",
    children: [
      {
        value: "Mr.Stephen_15",
        label: "Mr.Stephen_15",
      },
      {
        value: "Ms.Rose_15",
        label: "Ms.Rose_15",
      },
    ],
  },
  {
    value: "Diamond",
    label: "Diamond",
    children: [
      {
        value: "Mr.Stephen_16",
        label: "Mr.Stephen_16",
      },
      {
        value: "Ms.Rose_16",
        label: "Ms.Rose_16",
      },
    ],
  },
];

export default function ChonGiaoVien() {
  const [text, setText] = useState("Choose Teacher");
  const onChange = (_, selectedOptions) => {
    setText(
      selectedOptions
        .map((o) => o.label)
        .reverse()
        .join(", ")
    );
  };

  return (
    <div className="text-center">
      {/* <p>{text}</p> */}
      <p className="text-center">
        How was your experience with
        <Cascader options={options} onChange={onChange}>
          <button className="uppercase text-red-500 font-bold ml-1">
            {text}
          </button>
        </Cascader>
      </p>
    </div>
  );
}

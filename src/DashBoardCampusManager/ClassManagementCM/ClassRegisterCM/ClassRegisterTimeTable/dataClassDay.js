const dataClassDay = [
  {
    day: "MON",
    classList: [
      {
        class: "Seed 5",
        time1: "Coaching",
        time2: "Coaching",
        time3: "",
        time4: "",
      },
      {
        class: "Sprout",
        time1: "Online",
        time2: "Online",
        time3: "",
        time4: "",
      },
      {
        class: "Bud",
        time1: "Coaching",
        time2: "Coaching",
        time3: "",
        time4: "",
      },
      {
        class: "E4-2",
        time1: "",
        time2: "",
        time3: "Coaching",
        time4: "Coaching",
      },
      {
        class: "E7-2",
        time1: "",
        time2: "",
        time3: "Coaching",
        time4: "Coaching",
      },
      {
        class: "M11",
        time1: "",
        time2: "",
        time3: "LAB",
        time4: "LAB",
      },
      {
        class: "M12",
        time1: "",
        time2: "",
        time3: "",
        time4: "LAB",
      },
    ],
  },
  {
    day: "TUE",
    classList: [
      {
        class: "TUE",
        time1: "",
        time2: "Coaching",
        time3: "Coaching",
        time4: "",
      },
      {
        class: "Bud",
        time1: "",
        time2: "Online",
        time3: "",
        time4: "Online",
      },
      {
        class: "E4-1",
        time1: "Coaching",
        time2: "",
        time3: "",
        time4: "Coaching",
      },
      {
        class: "E4-2",
        time1: "",
        time2: "Coaching",
        time3: "",
        time4: "Coaching",
      },
      {
        class: "E6-2",
        time1: "",
        time2: "",
        time3: "Coaching",
        time4: "Coaching",
      },
      {
        class: "M10",
        time1: "LAB",
        time2: "",
        time3: "",
        time4: "LAB",
      },
    ],
  },
];

export const getClassList = (day) =>
  dataClassDay.find((item) => item.day === day).classList;

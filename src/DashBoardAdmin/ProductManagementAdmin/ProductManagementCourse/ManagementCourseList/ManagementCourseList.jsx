import React, { useState } from "react";
import { Select, Table } from "antd";
import { NavLink } from "react-router-dom";

const EKONG = "Ekong";
const ELEVEL = "E Level";
const M11 = "M11";
const M12 = "M12";
const M13 = "M13";
const M14 = "M14";
const M15 = "M15";

const dataEkong = [
  { id: 1, level: "Ekong", course: "Sprout A-1", unit: "8" },
  { id: 2, level: "Ekong", course: "Sprout A-2", unit: "8" },
  { id: 3, level: "Ekong", course: "Sprout B-1", unit: "8" },
  { id: 4, level: "Ekong", course: "Sprout B-2", unit: "8" },
];
const dataELevel = [
  { id: 5, level: "E Level", course: "E3-1", unit: "8" },
  { id: 6, level: "E Level", course: "E3-2", unit: "8" },
  { id: 7, level: "E Level", course: "E4-1", unit: "8" },
  { id: 8, level: "E Level", course: "E4-2", unit: "8" },
  { id: 9, level: "E Level", course: "E5-1", unit: "8" },
  { id: 10, level: "E Level", course: "E5-2", unit: "8" },
  { id: 11, level: "E Level", course: "E6-1", unit: "8" },
  { id: 12, level: "E Level", course: "E6-2", unit: "8" },
  { id: 13, level: "E Level", course: "E7-1", unit: "8" },
  { id: 14, level: "E Level", course: "E7-2", unit: "8" },
  { id: 15, level: "E Level", course: "E8-1", unit: "8" },
  { id: 16, level: "E Level", course: "E8-2", unit: "8" },
];
const dataM11 = [
  { id: 17, level: "M11", course: "1. Reading Jump 2", unit: "8" },
  {
    id: 18,
    level: "M11",
    course: "2. More School Subject Reading 2",
    unit: "8",
  },
  { id: 19, level: "M11", course: "3. Reading Voyage Basic 1", unit: "8" },
  {
    id: 20,
    level: "M11",
    course: "4. Short Articles for Reading Comprehension 1",
    unit: "8",
  },
  { id: 21, level: "M11", course: "5. Reading Pass Intro", unit: "8" },
  {
    id: 22,
    level: "M11",
    course: "6. More School Subject Reading 1",
    unit: "8",
  },
];
const dataM12 = [
  { id: 23, level: "M12", course: "1. Fundamental Reading Basic 1", unit: "8" },
  {
    id: 24,
    level: "M12",
    course: "2. Short Articles for Reading Comprehension 2",
    unit: "8",
  },
  {
    id: 25,
    level: "M12",
    course: "3. Reading for Subject 2(2nd edition)",
    unit: "8",
  },
  { id: 26, level: "M12", course: "4. Reading Voyage Basic 3", unit: "8" },
  {
    id: 27,
    level: "M12",
    course: "5. Short Articles Reading Comprehension 3",
    unit: "8",
  },
  { id: 28, level: "M12", course: "6. Reading Voyage Plus 1", unit: "8" },
];
const dataM13 = [
  { id: 29, level: "M13", course: "1. Moving Up Reading 2", unit: "8" },
  { id: 30, level: "M13", course: "2. Fundamental Reading Basic 2", unit: "8" },
  { id: 31, level: "M13", course: "3. Bricks Subject Reading 1", unit: "8" },
  { id: 32, level: "M13", course: "4. Bricks Subject Reading 2", unit: "8" },
  {
    id: 33,
    level: "M13",
    course: "5. Reading for Subject 3(2nd edition)",
    unit: "8",
  },
  { id: 34, level: "M13", course: "6. Fundamental Reading Plus 1", unit: "8" },
];
const dataM14 = [
  { id: 35, level: "M14", course: "1. Fundamental Reading Plus 2", unit: "8" },
  { id: 36, level: "M14", course: "2. Read Up 1A/B", unit: "8" },
  { id: 37, level: "M14", course: "3. Bricks Intensive Reading 1", unit: "8" },
  { id: 38, level: "M14", course: "4. Moving Up Reading 4", unit: "8" },
  { id: 39, level: "M14", course: "5. Read UP 2A/B", unit: "8" },
  { id: 40, level: "M14", course: "6. Fundamental Reading Plus 3", unit: "8" },
];
const dataM15 = [
  { id: 41, level: "M15", course: "1. Read Up 3A/B", unit: "8" },
  { id: 42, level: "M15", course: "2. Bricks Intensive Reading 3", unit: "8" },
  { id: 43, level: "M15", course: "3. Bricks Intensive Reading 4", unit: "8" },
  {
    id: 44,
    level: "M15",
    course: "4. Reading for the Real World 2(4th edition)",
    unit: "8",
  },
  {
    id: 45,
    level: "M15",
    course: "5. Reading for the Real World 3(4th edition)",
    unit: "8",
  },
];
const dataOrigin = dataEkong
  .concat(dataELevel)
  .concat(dataM11)
  .concat(dataM12)
  .concat(dataM13)
  .concat(dataM14)
  .concat(dataM15);

const sharedOnCell = (_, index) => {
  // merge Ekong
  if (index === dataOrigin.findIndex((ele) => ele.level === EKONG)) {
    return {
      rowSpan: dataEkong.length,
    };
  }
  // merge E Level
  if (index === dataOrigin.findIndex((ele) => ele.level === ELEVEL)) {
    return {
      rowSpan: dataELevel.length,
    };
  }

  // merge M11
  if (index === dataOrigin.findIndex((ele) => ele.level === M11)) {
    return {
      rowSpan: dataM11.length,
    };
  }
  // merge M12
  if (index === dataOrigin.findIndex((ele) => ele.level === M12)) {
    return {
      rowSpan: dataM12.length,
    };
  }
  // merge M13
  if (index === dataOrigin.findIndex((ele) => ele.level === M13)) {
    return {
      rowSpan: dataM13.length,
    };
  }
  // merge M14
  if (index === dataOrigin.findIndex((ele) => ele.level === M14)) {
    return {
      rowSpan: dataM14.length,
    };
  }
  // merge M15

  if (index === dataOrigin.findIndex((ele) => ele.level === M15)) {
    return {
      rowSpan: dataM15.length,
    };
  }

  // span col
  if (
    index >= 0 &&
    index <= dataOrigin.findLastIndex((ele) => ele.level === M15)
  ) {
    return {
      colSpan: 0,
    };
  }

  return {};
};

const sharedOnCellFilter = (_, index) => {
  if (index === 0) {
    return {
      rowSpan: dataOrigin.length,
    };
  }

  // span col
  if (
    index >= 0 &&
    index <= dataOrigin.findLastIndex((ele) => ele.level === M15)
  ) {
    return {
      colSpan: 0,
    };
  }

  return {};
};

const optionLevels = [
  { label: "Ekong", value: EKONG },
  { label: "E Level", value: ELEVEL },
  { label: "M11", value: M11 },
  { label: "M12", value: M12 },
  { label: "M13", value: M13 },
  { label: "M14", value: M14 },
  { label: "M15", value: M15 },
  { label: "All", value: "All" },
];
export default function ManagementCourseList() {
  const [data, setData] = useState(dataOrigin);
  const [isFilter, setIsFilter] = useState(false);

  // action_filter
  const handleChangeLevel = (value) => {
    console.log(`Selected: ${value}`);
    switch (value) {
      case EKONG:
        setIsFilter(true);
        setData(dataEkong);
        break;
      case ELEVEL:
        setIsFilter(true);
        setData(dataELevel);
        break;
      case M11:
        setIsFilter(true);
        setData(dataM11);
        break;
      case M12:
        setIsFilter(true);
        setData(dataM12);
        break;
      case M13:
        setIsFilter(true);
        setData(dataM13);
        break;
      case M14:
        setIsFilter(true);
        setData(dataM14);
        break;
      case M15:
        setIsFilter(true);
        setData(dataM15);
        break;
      default:
        setIsFilter(false);
        setData(dataOrigin);
    }
  };

  const columns = [
    {
      title: "Level",
      dataIndex: "level",
      onCell: isFilter ? sharedOnCellFilter : sharedOnCell,
      width: "10%",
    },
    {
      title: "Course",
      dataIndex: "course",
      // onCell: sharedOnCell,
      width: "50%",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      // onCell: sharedOnCell,
    },
    {
      title: "Edit",
      dataIndex: "edit",
      render: (_, record) => {
        console.log(record);
        return (
          <NavLink
            to={`/dash-board-admin/product-management/course/actions-course/${record.id}`}
          >
            <i className="fa fa-cog"></i>
          </NavLink>
        );
      },
    },
  ];

  return (
    <div id="ManagementCourseList">
      <div className="flex flex-wrap justify-between items-center">
        <div className="action_left">
          <NavLink
            to={"/dash-board-admin/product-management/course/actions-course/0"}
          >
            <button className="px-3 py-1 my-4 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300">
              Add New Course
            </button>
          </NavLink>
        </div>
        <div className="action_right">
          <span className="font-bold mr-1 ml-4">Level:</span>
          <Select
            defaultValue="All"
            onChange={handleChangeLevel}
            style={{
              width: 160,
            }}
            options={optionLevels}
          />
          <button
            type="button"
            className="ml-3 px-3 py-1 font-semibold border rounded border-transparent bg-green-600 text-gray-50 hover:text-gray-50 hover:bg-green-500 duration-300"
          >
            Search
          </button>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="w-full"
      />
    </div>
  );
}

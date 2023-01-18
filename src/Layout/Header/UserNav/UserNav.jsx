import { Badge, Dropdown, Space, Switch } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ExportOutlined, BellOutlined } from "@ant-design/icons";
import LanguageConfig from "../../../Components/LanguageConfig/LanguageConfig";
import { useSelector } from "react-redux";
import { serviceLocalStorageUser } from "../../../util/demoLocalStorage/demoLocalStorage";

const iconStyle = {
  fontSize: "25px",
};

export default function UserNav() {
  let userInfor = serviceLocalStorageUser.user.get();
  let items = null;

  const itemStudents = [
    {
      key: "1",
      label: (
        <NavLink
          to={`/dash-board-student/${userInfor.ma}`}
          className="flex items-center justify-between py-2 w-48"
        >
          <img
            alt=""
            className="w-8 h-8 rounded-full ring-2 ring-offset-2 bg-gray-500 ring-sky-600 ring-offset-gray-100"
            src="https://picsum.photos/200"
          />
          <span className="font-bold ml-4">{userInfor.name}</span>
        </NavLink>
      ),
    },
    {
      key: "6",
      label: (
        <div className="flex items-center justify-between">
          <span>Point</span>
          <span>1,000</span>
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="flex items-center justify-between">
          <span>Gems</span>
          <span>Diamond</span>
        </div>
      ),
    },
    {
      key: "7",
      label: (
        <div className="flex items-center justify-between">
          <span>Level</span>
          <span>King</span>
        </div>
      ),
    },
    {
      key: "close-dropdown",
      danger: true,
      label: (
        <button className="w-full text-left" onClick={() => handleLogOut()}>
          Logout
        </button>
      ),
      icon: <ExportOutlined />,
    },
  ];

  const itemTeacher = [
    {
      key: "1",
      label: (
        <NavLink
          to={`/dash-board-teacher/${userInfor.ma}`}
          className="flex items-center justify-between py-2 w-48"
        >
          <img
            alt=""
            className="w-8 h-8 rounded-full ring-2 ring-offset-2 bg-gray-500 ring-sky-600 ring-offset-gray-100"
            src="https://picsum.photos/200"
          />
          <span className="font-bold ml-4">{userInfor.name}</span>
        </NavLink>
      ),
    },
    {
      key: "6",
      label: (
        <div className="flex items-center justify-between">
          <span>Point</span>
          <span>1,000</span>
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="flex items-center justify-between">
          <span>Teacher</span>
          <span>Offline</span>
        </div>
      ),
    },
    {
      key: "close-dropdown",
      danger: true,
      label: (
        <button className="w-full text-left" onClick={() => handleLogOut()}>
          Logout
        </button>
      ),
      icon: <ExportOutlined />,
    },
  ];

  const itemsParents = [
    {
      key: "1",
      label: (
        <NavLink
          to={`/dash-board-teacher/${userInfor.ma}`}
          className="flex items-center justify-between py-2 w-48"
        >
          <img
            alt=""
            className="w-8 h-8 rounded-full ring-2 ring-offset-2 bg-gray-500 ring-sky-600 ring-offset-gray-100"
            src="https://picsum.photos/200"
          />
          <span className="font-bold ml-4">{userInfor.name}</span>
        </NavLink>
      ),
    },
    {
      key: "6",
      label: (
        <div className="flex items-center justify-between">
          <span>Point</span>
          <span>1,000</span>
        </div>
      ),
    },
    {
      key: "close-dropdown",
      danger: true,
      label: (
        <button className="w-full text-left" onClick={() => handleLogOut()}>
          Logout
        </button>
      ),
      icon: <ExportOutlined />,
    },
  ];

  const itemsAdmin = [
    {
      key: "1",
      label: (
        <NavLink
          to={`/dash-board-teacher/${userInfor.ma}`}
          className="flex items-center justify-between py-2 w-48"
        >
          <img
            alt=""
            className="w-8 h-8 rounded-full ring-2 ring-offset-2 bg-gray-500 ring-sky-600 ring-offset-gray-100"
            src="https://picsum.photos/200"
          />
          <span className="font-bold ml-4">{userInfor.name}</span>
        </NavLink>
      ),
    },
    {
      key: "6",
      label: (
        <div className="flex items-center justify-between">
          <span>Point</span>
          <span>1,000</span>
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="flex items-center justify-between">
          <span>Level</span>
          <span>Senior</span>
        </div>
      ),
    },
    {
      key: "close-dropdown",
      danger: true,
      label: (
        <button className="w-full text-left" onClick={() => handleLogOut()}>
          Logout
        </button>
      ),
      icon: <ExportOutlined />,
    },
  ];

  const itemsCampus = [
    {
      key: "1",
      label: (
        <NavLink
          to={`/dash-board-teacher/${userInfor.ma}`}
          className="flex items-center justify-between py-2 w-48"
        >
          <img
            alt=""
            className="w-8 h-8 rounded-full ring-2 ring-offset-2 bg-gray-500 ring-sky-600 ring-offset-gray-100"
            src="https://picsum.photos/200"
          />
          <span className="font-bold ml-4">{userInfor.name}</span>
        </NavLink>
      ),
    },
    {
      key: "6",
      label: (
        <div className="flex items-center justify-between">
          <span>Point</span>
          <span>1,000</span>
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="flex items-center justify-between">
          <span>Level</span>
          <span>Junior</span>
        </div>
      ),
    },
    {
      key: "close-dropdown",
      danger: true,
      label: (
        <button className="w-full text-left" onClick={() => handleLogOut()}>
          Logout
        </button>
      ),
      icon: <ExportOutlined />,
    },
  ];

  switch (userInfor?.role) {
    case "teacher": {
      items = [...itemTeacher];
      break;
    }
    case "student": {
      items = [...itemStudents];
      break;
    }
    case "parents": {
      items = [...itemsParents];
      break;
    }
    case "admin": {
      items = [...itemsAdmin];
      break;
    }
    case "campusManager": {
      items = [...itemsCampus];
      break;
    }
    default: {
      items = [];
    }
  }

  // use
  let { arrActivityHistory } = useSelector(
    (state) => state.reducerActivityHistory
  );
  let soThongBao = arrActivityHistory.length;
  // handle
  let handleLogOut = () => {
    console.log("Đăng xuất");

    // dispatch(dangXuatAction());
    window.location.href = "/login";
    setTimeout(() => {
      serviceLocalStorageUser.user.remove();
    }, 1000);
  };

  //

  // dark mode
  const [theme, setTheme] = useState("dark");
  const [current, setCurrent] = useState("1");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  // drop down
  const [open, setOpen] = useState(false);

  const handleOpenChange = (flag) => {
    setOpen(flag);
  };

  const handleMenuClick = (e) => {
    if (e.key === "close-dropdown") {
      setOpen(false);
    }
  };

  return (
    <div id="userNav" className="flex items-center">
      <Space size="middle" className="mx-5">
        <Badge count={soThongBao}>
          <BellOutlined style={iconStyle} />
        </Badge>
      </Space>

      <Dropdown
        menu={{
          items,
          onClick: handleMenuClick,
        }}
        onOpenChange={handleOpenChange}
        open={open}
        placement="bottomRight"
      >
        <Space className="cursor-pointer">
          <img
            alt="avatar"
            className="w-8 h-8 rounded-full ring-2 ring-offset-2 bg-gray-500 ring-sky-600 ring-offset-gray-100"
            src="https://picsum.photos/200"
          />
        </Space>
      </Dropdown>
    </div>
  );
}

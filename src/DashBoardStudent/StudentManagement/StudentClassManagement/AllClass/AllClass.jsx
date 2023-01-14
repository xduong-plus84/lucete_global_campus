import { Button, Space } from "antd";
import React from "react";
import { dataAllClass } from "./dataAllClass";

import gem1 from "../../../../assets/imges/gems/gem1.png";
import gem2 from "../../../../assets/imges/gems/gem2.png";
import gem3 from "../../../../assets/imges/gems/gem3.png";
import gem4 from "../../../../assets/imges/gems/gem4.png";
import gem5 from "../../../../assets/imges/gems/gem5.png";
import gem6 from "../../../../assets/imges/gems/gem6.png";
import gem7 from "../../../../assets/imges/gems/gem7.png";
import gem8 from "../../../../assets/imges/gems/gem8.png";
import gem9 from "../../../../assets/imges/gems/gem9.png";
import gem10 from "../../../../assets/imges/gems/gem10.png";
import gem11 from "../../../../assets/imges/gems/gem11.png";
import gem12 from "../../../../assets/imges/gems/gem12.png";
import gem13 from "../../../../assets/imges/gems/gem13.png";
import gem14 from "../../../../assets/imges/gems/gem14.png";
import gem15 from "../../../../assets/imges/gems/gem15.png";
import gem16 from "../../../../assets/imges/gems/gem16.png";

export default function AllClass() {
  return (
    <>
      {dataAllClass.map((item, index) => {
        return (
          <div className="group-gem flex flex-col items-start my-2" key={index}>
            <div className="flex justify-center items-end">
              <img src={item.img} className="w-16 h-16" alt="" />
              <Space wrap className="ml-8">
                <Button disabled>Server 1</Button>
                <Button disabled>Server 2</Button>
                <Button disabled>Server 3</Button>
                <Button disabled>Server 4</Button>
              </Space>
            </div>
            <span className="text-center mt-2">{item.name}</span>
          </div>
        );
      })}
    </>
  );
}

import React from "react";

const styleAvatar = {
  width: 30,
  height: 30,
  objectFit: "cover",
  objectPosition: "center",
  display: "inline-block",
  borderRadius: "40px",
  marginRight: "10px",
};

export default function StudentNotification() {
  const renderMess = () => {
    return dataDemoNotification.map((item, index) => {
      return (
        <div key={index} className="p-2 my-2 bg-gray-100 rounded-xl">
          <img src={item.img} style={{ ...styleAvatar }} alt={item.img} />
          <span className="font-bold text-sm">Stephen</span>
          <p className="text-sm">{item.content}</p>
        </div>
      );
    });
  };
  return <div className="pr-1">{renderMess()}</div>;
}

const dataDemoNotification = [
  {
    id: 1,
    img: "https://picsum.photos/100",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores. Hic, fugit dolorem nesciunt suscipit ducimus repudiandae quos. Sapiente impedit consequatur officiis dolores omnis, sed incidunt. Omnis non cumque quod beatae! Reiciendis ex error porro expedita animi debitis nostrum distinctio et voluptates odit tempora ut totam itaque, veniam explicabo dolor?",
  },
  {
    id: 2,
    img: "https://picsum.photos/200",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores. Hic, fugit dolorem nesciunt suscipit ducimus repudiandae quos. Sapiente impedit consequatur officiis dolores omnis, sed incidunt. Omnis non cumque quod beatae! Reiciendis ex error porro expedita animi debitis nostrum distinctio et voluptates odit tempora ut totam itaque, veniam explicabo dolor?",
  },
  {
    id: 3,
    img: "https://picsum.photos/300",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores. Hic, fugit dolorem nesciunt suscipit ducimus repudiandae quos. Sapiente impedit consequatur officiis dolores omnis, sed incidunt. Omnis non cumque quod beatae! Reiciendis ex error porro expedita animi debitis nostrum distinctio et voluptates odit tempora ut totam itaque, veniam explicabo dolor?",
  },
  {
    id: 4,
    img: "https://picsum.photos/100",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores. Hic, fugit dolorem nesciunt suscipit ducimus repudiandae quos. Sapiente impedit consequatur officiis dolores omnis, sed incidunt. Omnis non cumque quod beatae! Reiciendis ex error porro expedita animi debitis nostrum distinctio et voluptates odit tempora ut totam itaque, veniam explicabo dolor?",
  },
  {
    id: 5,
    img: "https://picsum.photos/300",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores. Hic, fugit dolorem nesciunt suscipit ducimus repudiandae quos. Sapiente impedit consequatur officiis dolores omnis, sed incidunt. Omnis non cumque quod beatae! Reiciendis ex error porro expedita animi debitis nostrum distinctio et voluptates odit tempora ut totam itaque, veniam explicabo dolor?",
  },
  {
    id: 6,
    img: "https://picsum.photos/200",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores. Hic, fugit dolorem nesciunt suscipit ducimus repudiandae quos. Sapiente impedit consequatur officiis dolores omnis, sed incidunt. Omnis non cumque quod beatae! Reiciendis ex error porro expedita animi debitis nostrum distinctio et voluptates odit tempora ut totam itaque, veniam explicabo dolor?",
  },
  {
    id: 7,
    img: "https://picsum.photos/100",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores. Hic, fugit dolorem nesciunt suscipit ducimus repudiandae quos. Sapiente impedit consequatur officiis dolores omnis, sed incidunt. Omnis non cumque quod beatae! Reiciendis ex error porro expedita animi debitis nostrum distinctio et voluptates odit tempora ut totam itaque, veniam explicabo dolor?",
  },
  {
    id: 8,
    img: "https://picsum.photos/300",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, dolores. Hic, fugit dolorem nesciunt suscipit ducimus repudiandae quos. Sapiente impedit consequatur officiis dolores omnis, sed incidunt. Omnis non cumque quod beatae! Reiciendis ex error porro expedita animi debitis nostrum distinctio et voluptates odit tempora ut totam itaque, veniam explicabo dolor?",
  },
];

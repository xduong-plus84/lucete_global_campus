import { Popover } from "antd";
import React from "react";
import OnlineClassListTablePopover from "./OnlineClassListTablePopover";

const dataDemoClassMON = [
  { row: 1, classes: ["E4-MW1A", "E5-MW1A"] },
  { row: 2, classes: [] },
  { row: 3, classes: [] },
  { row: 4, classes: [] },
];
const dataDemoClassTUE = [
  { row: 1, classes: ["E6-TT1A", "E7-TT1A"] },
  { row: 2, classes: [] },
  { row: 3, classes: [] },
  { row: 4, classes: [] },
];
const dataDemoClassWED = [
  { row: 1, classes: ["E4-MW1A", "E5-MW1A"] },
  { row: 2, classes: [] },
  { row: 3, classes: [] },
  { row: 4, classes: ["M12-W2A", "M14-W2A", "M14-W2B"] },
];
const dataDemoClassTHUR = [
  { row: 1, classes: [] },
  { row: 2, classes: [] },
  { row: 3, classes: [] },
  { row: 4, classes: ["M15-Th2A"] },
];
const dataDemoClassFRI = [
  { row: 1, classes: [] },
  { row: 2, classes: ["M12-W2A", "M14-W2A", "M14-W2B"] },
  { row: 3, classes: [] },
  { row: 4, classes: [] },
];

export default function OnlineClassListTable() {
  const contentPopover = (classID) => {
    return <OnlineClassListTablePopover classID={classID} />;
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex text-center justify-center py-4">
        <div className="border-r-2">
          <table>
            <tbody className="divide-y">
              <tr className="divide-x h-16">
                <td className="p-4"></td>
              </tr>
              <tr className="divide-x h-16">
                <td className="p-4 font-semibold">14:00~15:00</td>
              </tr>
              <tr className="divide-x h-16">
                <td className="p-4 font-semibold">14:00~15:00</td>
              </tr>
              <tr className="divide-x h-16">
                <td className="p-4 font-semibold">14:00~15:00</td>
              </tr>
              <tr className="divide-x h-16">
                <td className="p-4 font-semibold">14:00~15:00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-r-2">
          <div className="grow border-b-2 h-16 flex justify-center items-center px-8">
            <span>MON</span>
          </div>
          <table>
            <tbody className="divide-y">
              {dataDemoClassMON.map((row, indexRow) => {
                return (
                  <tr key={indexRow} className="divide-x bg-blue-400 h-16">
                    {row.classes.map((className, indexClass) => {
                      return (
                        <Popover content={contentPopover(className)}>
                          <td key={indexClass} className="p-4">
                            {className}
                          </td>
                        </Popover>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="border-r-2">
          <div className="grow border-b-2 h-16 flex justify-center items-center px-8">
            <span>TUE</span>
          </div>
          <table>
            <tbody className="divide-y">
              {dataDemoClassTUE.map((row, indexRow) => {
                console.log(row.classes);
                return (
                  <tr key={indexRow} className="divide-x bg-blue-400 h-16">
                    {row.classes.map((className, indexClass) => {
                      return (
                        <Popover content={contentPopover(className)}>
                          <td key={indexClass} className="p-4">
                            {className}
                          </td>
                        </Popover>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="border-r-2">
          <div className="grow border-b-2 h-16 flex justify-center items-center px-8">
            <span>WED</span>
          </div>
          <table>
            <tbody className="divide-y">
              {dataDemoClassWED.map((row, indexRow) => {
                console.log(row.classes);
                return (
                  <tr key={indexRow} className="divide-x bg-blue-400 h-16">
                    {row.classes.map((className, indexClass) => {
                      return (
                        <Popover content={contentPopover(className)}>
                          <td key={indexClass} className="p-4">
                            {className}
                          </td>
                        </Popover>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="border-r-2">
          <div className="grow border-b-2 h-16 flex justify-center items-center px-8">
            <span>THUR</span>
          </div>
          <table>
            <tbody className="divide-y">
              {dataDemoClassTHUR.map((row, indexRow) => {
                console.log(row.classes);
                return (
                  <tr key={indexRow} className="divide-x bg-blue-400 h-16">
                    {row.classes.map((className, indexClass) => {
                      return (
                        <Popover content={contentPopover(className)}>
                          <td key={indexClass} className="p-4">
                            {className}
                          </td>
                        </Popover>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="border-r-2">
          <div className="grow border-b-2 h-16 flex justify-center items-center px-8">
            <span>FRI</span>
          </div>
          <table>
            <tbody className="divide-y">
              {dataDemoClassFRI.map((row, indexRow) => {
                console.log(row.classes);
                return (
                  <tr key={indexRow} className="divide-x bg-blue-400 h-16">
                    {row.classes.map((className, indexClass) => {
                      return (
                        <Popover content={contentPopover(className)}>
                          <td key={indexClass} className="p-4">
                            {className}
                          </td>
                        </Popover>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

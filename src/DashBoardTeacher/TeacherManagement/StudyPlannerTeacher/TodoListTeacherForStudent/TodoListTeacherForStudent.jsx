import { Button, Progress, Tag, Tooltip } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  doneTask_API,
  getAllTaskList_API,
} from "../../../../redux/actions/action_DemoToDoList";

export default function TodoListTeacherForStudent() {
  console.log("render main");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTaskList_API());
  }, []);

  const { taskList } = useSelector((state) => state.reducer_DemoTodoList);

  const handleDone = (task) => {
    const taskUpdate = { ...task, isComplete: true };
    dispatch(doneTask_API(taskUpdate));
  };

  let renderListToDo = () => {
    return taskList
      .filter((task) => !task.isComplete)
      .map((task, index) => {
        return (
          <li key={index} className="flex justify-center space-x-2">
            <div className="flex items-start shadow-md w-full">
              <div className="flex flex-1 flex-col p-4 border-l-8 border-green-600">
                <div className="flex items-end">
                  <span className="font-bold text-lg">{task.title}</span>
                </div>
                <span className="text-xs text-gray-600">
                  note something here
                </span>
              </div>

              <div className="flex flex-col pt-4 items-end">
                <Button className="mr-2" onClick={() => handleDone(task)}>
                  Done
                </Button>

                <div>
                  <span className="italic text-xs opacity-85 mt-2">
                    31/1/2023
                  </span>
                  <Tag className="m-2" color="magenta">
                    Stephen
                  </Tag>
                </div>
              </div>
            </div>
          </li>
        );
      });
  };
  let renderListDone = () => {
    return taskList
      .filter((task) => task.isComplete)
      .map((task, index) => {
        return (
          <li key={index} className="flex justify-center space-x-2">
            <div className="flex items-start shadow-md w-full">
              <div className="flex flex-1 flex-col p-4 border-l-8 border-purple-600">
                <span className="font-bold text-lg">{task.title}</span>
                <span className="text-xs text-gray-600">
                  note something here
                </span>
              </div>
              <div className="flex flex-col pt-4">
                <span className="italic text-xs opacity-85 mt-2">
                  31/1/2023
                </span>
                <Tag className="my-2" color="magenta">
                  Stephen
                </Tag>
              </div>
            </div>
          </li>
        );
      });
  };

  return (
    <section className="text-gray-800">
      <div className="container px-4 mx-auto sm:p-10">
        {/* status student  */}
        <div className="w-full flex justify-between flex-wrap mb-5">
          <Tooltip
            className="m-0 p-0"
            title="Cố lên. Sắp hoàn thành lộ trình rồi"
          >
            <Progress percent={60} className="w-2/5" />
          </Tooltip>

          <Tooltip className="m-0 py-0" title="6 todos / 3 done/ 1 incomplete">
            <Progress
              percent={90}
              success={{
                percent: 60,
              }}
              strokeColor={"#9333EA"}
              trailColor={"#DC2626"}
              showInfo={false}
              className="w-2/5"
            />
          </Tooltip>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
          {/* todo */}
          <div className="flex flex-col overflow-hidden rounded-md border-gray-300">
            <div className="flex flex-col items-center justify-center px-2 py-2 space-y-4 bg-green-600 border-b-2 border-gray-200">
              <p className="text-3xl font-medium">To do</p>
            </div>
            <div className="flex flex-col items-center justify-center py-8 bg-gray-50">
              <ul className="self-stretch flex-1 space-y-2">
                {renderListToDo()}
              </ul>
            </div>
          </div>
          {/* done  */}
          <div className="flex flex-col overflow-hidden rounded-md border-gray-300">
            <div className="flex flex-col items-center justify-center px-2 py-2 space-y-4 bg-purple-600 border-b-2 border-gray-200">
              <p className="text-3xl font-medium">Done</p>
            </div>
            <div className="flex flex-col items-center justify-center py-8 bg-gray-50">
              <ul className="self-stretch flex-1 space-y-2">
                {renderListDone()}
              </ul>
            </div>
          </div>
          {/* incomplete  */}
          <div className="flex flex-col overflow-hidden rounded-md border-gray-300">
            <div className="flex flex-col items-center justify-center px-2 py-2 space-y-4 bg-red-600 border-b-2 border-gray-200">
              <p className="text-3xl font-medium">Incomplete</p>
            </div>
            <div className="flex flex-col items-center justify-center py-8 bg-gray-50">
              <ul className="self-stretch flex-1 space-y-2">
                <li className="flex justify-center space-x-2">
                  <div className="flex items-start shadow-md w-full">
                    <div className="flex flex-1 flex-col p-4 border-l-8 border-red-600">
                      <span className="font-bold text-lg">Reading 1</span>
                      <span className="text-xs text-gray-600">
                        note something here
                      </span>
                    </div>
                    <div className="flex flex-col pt-4">
                      <span className="italic text-xs opacity-85 mt-2">
                        31/1/2023
                      </span>
                      <Tag className="my-2" color="magenta">
                        Stephen
                      </Tag>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Tag } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTaskList_API } from "../../../../redux/actions/action_DemoToDoList";

export default function StudentTodoList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTaskList_API());
  }, []);

  const { taskList } = useSelector((state) => state.reducer_DemoTodoList);

  let renderListToDo = () => {
    return taskList
      .filter((task) => !task.isComplete)
      .map((item, index) => {
        return (
          <li key={index} className="flex justify-center space-x-2">
            <div className="flex items-start shadow-md w-full">
              <div className="flex flex-1 flex-col p-4 border-l-8 border-green-600">
                <span className="font-bold text-lg">{item.title}</span>
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
  let renderListDone = () => {
    return taskList
      .filter((task) => task.isComplete)
      .map((item, index) => {
        return (
          <li key={index} className="flex justify-center space-x-2">
            <div className="flex items-start shadow-md w-full">
              <div className="flex flex-1 flex-col p-4 border-l-8 border-purple-600">
                <span className="font-bold text-lg">{item.title}</span>
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
  //   let renderListIncomplete = () => {
  //     return taskList
  //       .filter((task) => !task.status)
  //       .map((item, index) => {
  //         return (
  //           <li key={index}>
  //             <span>{item.taskName}</span>
  //             <div className="buttons">
  //               <button
  //                 className="remove"
  //                 type="button"
  //                 onClick={() => {
  //                   deleteTask(item.taskName);
  //                 }}
  //               >
  //                 <i className="fa fa-trash-alt" />
  //               </button>
  //               <button
  //                 type="button"
  //                 className="complete"
  //                 onClick={() => {
  //                   doneTask(item.taskName);
  //                 }}
  //               >
  //                 <i className="far fa-check-circle" />
  //                 <i className="fas fa-check-circle" />
  //               </button>
  //             </div>
  //           </li>
  //         );
  //       });
  //   };
  return (
    <section className="text-gray-800">
      <div className="container p-4 mx-auto sm:p-10">
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
          {/* todo */}
          <div className="flex flex-col overflow-hidden rounded-md border-gray-300">
            <div className="flex flex-col items-center justify-center px-2 py-2 space-y-4 bg-green-600 border-b-2 border-gray-200">
              <p className="text-3xl font-medium">To do</p>
            </div>
            <div className="flex flex-col items-center justify-center py-8 bg-gray-50">
              <ul className="self-stretch flex-1 space-y-2">
                {renderListToDo()}
                {/* <li className="flex justify-center space-x-2">
                    <div className="flex items-start shadow-md w-full">
                      <div className="flex flex-1 flex-col p-4 border-l-8 border-green-600">
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
  
                  <li className="flex justify-center space-x-2">
                    <div className="flex items-start shadow-md w-full">
                      <div className="flex flex-1 flex-col p-4 border-l-8 border-green-600">
                        <span className="font-bold text-lg">Reading 2</span>
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
  
                  <li className="flex justify-center space-x-2">
                    <div className="flex items-start shadow-md w-full">
                      <div className="flex flex-1 flex-col p-4 border-l-8 border-green-600">
                        <span className="font-bold text-lg">Reading 3</span>
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
                  </li> */}
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
                {/* <li className="flex justify-center space-x-2">
                    <div className="flex items-start shadow-md w-full">
                      <div className="flex flex-1 flex-col p-4 border-l-8 border-purple-600">
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
                  <li className="flex justify-center space-x-2">
                    <div className="flex items-start shadow-md w-full">
                      <div className="flex flex-1 flex-col p-4 border-l-8 border-purple-600">
                        <span className="font-bold text-lg">Reading 2</span>
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
                  </li> */}
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

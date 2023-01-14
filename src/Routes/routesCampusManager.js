// cm = campus management

import ArchiveCM from "../DashBoardCampusManager/ArchiveCM/ArchiveCM";
import ArchiveDetailCM from "../DashBoardCampusManager/ArchiveCM/ArchiveDetailCM";
import CampusManagerLayout from "../DashBoardCampusManager/CampusManagerLayout/CampusManagerLayout";
import ClassManagementCM from "../DashBoardCampusManager/ClassManagementCM/ClassManagementCM";
import ClassRegisterCM from "../DashBoardCampusManager/ClassManagementCM/ClassRegisterCM/ClassRegisterCM";
import ClassRegisterDetail from "../DashBoardCampusManager/ClassManagementCM/ClassRegisterCM/ClassRegisterList/ClassRegisterDetail";
import ClassSettingCM from "../DashBoardCampusManager/ClassManagementCM/ClassSettingCM/ClassSettingCM";
import ErrollmentApplyCM from "../DashBoardCampusManager/ErrollmentCM/EnrollmentApplyCM";
import ErrollmentCM from "../DashBoardCampusManager/ErrollmentCM/ErrollmentCM";
import LearningManagementCM from "../DashBoardCampusManager/LearningManagementCM/LearningManagementCM";
import LearningManagementDetailCM from "../DashBoardCampusManager/LearningManagementCM/LearningManagementDetailCM";
import ManagementHistory from "../DashBoardCampusManager/OrderManagementCM/ManagementHistory/ManagementHistory";
import ManagementHistoryDetail from "../DashBoardCampusManager/OrderManagementCM/ManagementHistory/ManagementHistoryDetail";
import ManagementOrder from "../DashBoardCampusManager/OrderManagementCM/ManagementOrder/ManagementOrder";
import ManagementSetting from "../DashBoardCampusManager/OrderManagementCM/ManagementSetting/ManagementSetting";
import OrderManagementCM from "../DashBoardCampusManager/OrderManagementCM/OrderManagementCM";
import PointManagementCM from "../DashBoardCampusManager/PointManagementCM/PointManagementCM";
import PointManagementDetailCM from "../DashBoardCampusManager/PointManagementCM/PointManagementDetailCM";
import RoleManagementCM from "../DashBoardCampusManager/RoleManagementCM/RoleManagementCM";
import RoleManagementRegisterCM from "../DashBoardCampusManager/RoleManagementCM/RoleManagementRegisterCM";
import StudentManagementCM from "../DashBoardCampusManager/StudentManagementCM/StudentManagementCM";
import StudentManagementRegisterCM from "../DashBoardCampusManager/StudentManagementCM/StudentManagementRegisterCM";
import StudyPlannerCM from "../DashBoardCampusManager/StudyPlannerCM/StudyPlannerCM";
import StudyPlannerDetailCM from "../DashBoardCampusManager/StudyPlannerCM/StudyPlannerDetailCM/StudyPlannerDetailCM";

// campus management -> role management
const cmRolemanagement = [
  {
    path: "/campus-manager/role-management",
    element: <CampusManagerLayout />,
    children: [
      {
        path: "",
        element: <RoleManagementCM />,
      },
      {
        path: "actions-role-management/:somethingID",
        element: <RoleManagementRegisterCM />,
      },
    ],
  },
];

// campus management -> class management
const cmClassManagement = [
  {
    path: "/campus-manager/class-management",
    element: <CampusManagerLayout />,
    children: [
      {
        path: "",
        element: <ClassManagementCM />,
      },
      {
        path: "register",
        element: <ClassManagementCM />,
        children: [
          {
            path: "",
            element: <ClassRegisterCM />,
          },
          {
            path: "detail/:somethingID",
            element: <ClassRegisterDetail />,
          },
        ],
      },
      {
        path: "setting",
        element: <ClassManagementCM />,
        children: [
          {
            path: "",
            element: <ClassSettingCM />,
          },
        ],
      },
    ],
  },
];

// campus management -> student management
const cmStudentManagement = [
  {
    path: "/campus-manager/student-management",
    element: <CampusManagerLayout />,
    children: [
      {
        path: "",
        element: <StudentManagementCM />,
      },
      {
        path: "register/:somethingID",
        element: <StudentManagementRegisterCM />,
      },
    ],
  },
];
// campus management -> enrollment
const cmEnrollment = [
  {
    path: "/campus-manager/enrollment",
    element: <CampusManagerLayout />,
    children: [
      {
        path: "",
        element: <ErrollmentCM />,
      },
      {
        path: "apply/:somethingID",
        element: <ErrollmentApplyCM />,
      },
    ],
  },
];

// campus management -> Learning Management
const cmLearningManagement = [
  {
    path: "/campus-manager/learning-management",
    element: <CampusManagerLayout />,
    children: [
      {
        path: "",
        element: <LearningManagementCM />,
      },
      {
        path: "detail/:somethingID",
        element: <LearningManagementDetailCM />,
      },
    ],
  },
];

// campus management -> Study Planner
const cmStudyPlanner = [
  {
    path: "/campus-manager/study-planner",
    element: <CampusManagerLayout />,
    children: [
      {
        path: "",
        element: <StudyPlannerCM />,
      },
      {
        path: "detail/:somethingID",
        element: <StudyPlannerDetailCM />,
      },
    ],
  },
];

// campus management -> Order Management
const cmOrderManagement = [
  {
    path: "/campus-manager/order-management",
    element: <CampusManagerLayout />,
    children: [
      {
        path: "",
        element: <OrderManagementCM />,
      },
      {
        path: "order",
        element: <OrderManagementCM />,
        children: [
          {
            path: "",
            element: <ManagementOrder />,
          },
        ],
      },
      {
        path: "history",
        element: <OrderManagementCM />,
        children: [
          {
            path: "",
            element: <ManagementHistory />,
          },
          {
            path: "detail/:somethingID",
            element: <ManagementHistoryDetail />,
          },
        ],
      },
      {
        path: "setting",
        element: <OrderManagementCM />,
        children: [
          {
            path: "",
            element: <ManagementSetting />,
          },
        ],
      },
    ],
  },
];

// campus management -> Point Management
const cmPointManagement = [
  {
    path: "/campus-manager/point-management",
    element: <CampusManagerLayout />,
    children: [
      {
        path: "",
        element: <PointManagementCM />,
      },
      {
        path: "detail/:somethingID",
        element: <PointManagementDetailCM />,
      },
    ],
  },
];

// campus management -> Point Management
const cmArchive = [
  {
    path: "/campus-manager/archive",
    element: <CampusManagerLayout />,
    children: [
      {
        path: "",
        element: <ArchiveCM />,
      },
      {
        path: "detail/:somethingID",
        element: <ArchiveDetailCM />,
      },
    ],
  },
];

export const routesCampusManagement = cmRolemanagement.concat(
  cmClassManagement,
  cmStudentManagement,
  cmEnrollment,
  cmLearningManagement,
  cmStudyPlanner,
  cmOrderManagement,
  cmPointManagement,
  cmArchive
);

// campus management -> online class management
// const cmOnlineClassManagement = [
//   {
//     path: "/campus-manager/online-class-management",
//     element: <AdminLayout />,
//     children: [
//       {
//         path: "",
//         element: <OnlineClassManagementAdmin />,
//       },
//       {
//         path: "online-class-register",
//         element: <OnlineClassManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <OnlineClassRegister />,
//           },
//           {
//             path: "online-class-register-actions/:someThingID",
//             element: <p>online-class-register-actions/:someThingID</p>,
//           },
//         ],
//       },
//       {
//         path: "online-class-list",
//         element: <OnlineClassManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <OnlineClassList />,
//           },
//           {
//             path: "detail/:somethingID",
//             element: <OnlineClassListTableClassListDetail />,
//           },
//         ],
//       },
//       {
//         path: "online-class-academic-calender",
//         element: <OnlineClassManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <OnlineClassAcademicCalendar />,
//           },
//         ],
//       },
//       {
//         path: "online-class-setting",
//         element: <OnlineClassManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <OnlineClassSetting />,
//           },
//           {
//             path: "class-report-detail/:reportID",
//             element: <TeacherClassReportAdDetail />,
//           },
//         ],
//       },
//     ],
//   },
// ];

// // campus management -> product management
// const cmProductManagement = [
//   {
//     path: "/campus-manager/product-management",
//     element: <AdminLayout />,
//     children: [
//       {
//         path: "",
//         element: <ProductManagementAdmin />,
//       },
//       {
//         path: "product",
//         element: <ProductManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <ManagementProductList />,
//           },
//           ,
//           {
//             path: "actions-product/:productID",
//             element: <AdminRegisterProduct />,
//           },
//         ],
//       },
//       {
//         path: "package",
//         element: <ProductManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <ManagementPackageList />,
//           },
//           ,
//           {
//             path: "actions-package/:packageID",
//             element: <AdminRegisterPackage />,
//           },
//         ],
//       },
//       {
//         path: "course",
//         element: <ProductManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <ManagementCourseList />,
//           },
//           ,
//           {
//             path: "actions-course/:courseID",
//             element: <AdminRegisterCourse />,
//           },
//         ],
//       },
//     ],
//   },
// ];

// // campus management -> study planner
// const cmStudyPlanner = [
//   {
//     path: "/campus-manager/study-planner",
//     element: <AdminLayout />,
//     children: [
//       {
//         path: "",
//         element: <StudyPlannerAdmin />,
//       },
//       {
//         path: "activity-management",
//         element: <StudyPlannerAdmin />,
//         children: [
//           {
//             path: "",
//             element: <AdminActivityList />,
//           },
//           ,
//           {
//             path: "actions-activity-management/:activityID",
//             element: <AdminRegisterActivity />,
//           },
//         ],
//       },
//       {
//         path: "planner-arrangement",
//         element: <StudyPlannerAdmin />,
//         children: [
//           {
//             path: "",
//             element: <PlannerArrangementList />,
//           },
//           ,
//           {
//             path: "actions-activity-managemen/:studentID",
//             element: <AdminStudyPlannerStudent />,
//           },
//         ],
//       },
//     ],
//   },
// ];

// // campus management -> student management
// const cmStudentManagement = [
//   {
//     path: "/campus-manager/student-management",
//     element: <AdminLayout />,
//     children: [
//       {
//         path: "",
//         element: <StudentManagementAdmin />,
//       },
//       {
//         path: "joined",
//         element: <StudentManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <StudentManagementJoined />,
//           },
//           {
//             path: "actions-joined/:studentID",
//             element: <StudentManagementJoinedRegister />,
//           },
//         ],
//       },
//       {
//         path: "withdrawal",
//         element: <StudentManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <StudentManagementWithdrawal />,
//           },
//         ],
//       },
//     ],
//   },
// ];

// // campus management -> enrollment
// const cmEnrollment = [
//   {
//     path: "/campus-manager/enrollment",
//     element: <AdminLayout />,
//     children: [
//       {
//         path: "",
//         element: <EnrollmentAdmin />,
//       },
//       {
//         path: "application-management",
//         element: <EnrollmentAdmin />,
//         children: [
//           {
//             path: "",
//             element: <EnrollmentApplication />,
//           },
//         ],
//       },
//       {
//         path: "history",
//         element: <EnrollmentAdmin />,
//         children: [
//           {
//             path: "",
//             element: <EnrollmentHistory />,
//           },
//           {
//             path: "actions-history/:no",
//             element: <EnrollmentHistoryRegister />,
//           },
//         ],
//       },
//     ],
//   },
// ];

// // campus management -> learning management
// const cmLearningManagement = [
//   {
//     path: "/campus-manager/learning-management",
//     element: <AdminLayout />,
//     children: [
//       {
//         path: "",
//         element: <LearningManagementAdmin />,
//       },
//       {
//         path: "learning-status",
//         element: <LearningManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <LearningStatus />,
//           },
//           {
//             path: "actions-learning-status/:id",
//             element: <LearningStatusRegister />,
//           },
//         ],
//       },
//     ],
//   },
// ];

// // campus management -> order-management
// const cmOrderManagement = [
//   {
//     path: "/campus-manager/order-management",
//     element: <AdminLayout />,
//     children: [
//       {
//         path: "",
//         element: <OrderManagementAdmin />,
//       },
//       {
//         path: "order",
//         element: <OrderManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <OrderList />,
//           },
//           {
//             path: "register-campus-standard/:campusID",
//             element: <OrderRegisterCampusStandard />,
//           },
//           {
//             path: "register-fixed-standard/:fixedID",
//             element: <OrderRegisterFixedStandard />,
//           },
//           {
//             path: "register-new-product/:productID",
//             element: <OrderRegisterNewProduct />,
//           },
//         ],
//       },
//       {
//         path: "history",
//         element: <OrderManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <OrderManagementHistory />,
//           },
//           {
//             path: "order-detail/:orderID",
//             element: <OrderManagementHitoryDetail />,
//           },
//         ],
//       },
//     ],
//   },
// ];

// // campus management -> teacher-management
// const cmTeacherManagement = [
//   {
//     path: "/campus-manager/teacher-management",
//     element: <AdminLayout />,
//     children: [
//       {
//         path: "",
//         element: <TeacherManagementAdmin />,
//       },
//       {
//         path: "management",
//         element: <TeacherManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <TeacherManagementList />,
//           },
//           {
//             path: "management-detail/:teacherID",
//             element: <TeacherManagementDetail />,
//           },
//         ],
//       },
//       {
//         path: "assign",
//         element: <TeacherManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <TeacherAssignAd />,
//           },
//           {
//             path: "assign-detail/:assignID",
//             element: <TeacherAssignAdAssginNew />,
//           },
//         ],
//       },
//       {
//         path: "payment",
//         element: <TeacherManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <TeacherPaymentAd />,
//           },
//           {
//             path: "payment-detail/:teacherID",
//             element: <TeacherPaymentAdTableSearch />,
//           },
//         ],
//       },
//       {
//         path: "class-report",
//         element: <TeacherManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <TeacherClassReportAd />,
//           },
//           {
//             path: "class-report-detail/:reportID",
//             element: <TeacherClassReportAdDetail />,
//           },
//         ],
//       },
//       {
//         path: "class-feedback",
//         element: <TeacherManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <TeacherClassFeedbackAd />,
//           },
//           {
//             path: "class-report-detail/:feedbackID",
//             element: <TeacherClassFeedbackAdDetail />,
//           },
//         ],
//       },
//     ],
//   },
// ];

// // campus management -> point management
// const cmPointManagement = [
//   {
//     path: "/campus-manager/point-management",
//     element: <AdminLayout />,
//     children: [
//       {
//         path: "",
//         element: <PointManagementAdmin />,
//       },
//       {
//         path: "management",
//         element: <PointManagementAdmin />,
//         children: [
//           {
//             path: "",
//             element: <PointManagementList />,
//           },
//           {
//             path: "point-management-detail/:teacherID",
//             element: <PointManagementDetail />,
//           },
//         ],
//       },
//     ],
//   },
// ];

// // campus management -> message  ~ pending
// const cmMessage = [
//   {
//     path: "/campus-manager/message",
//     element: <AdminLayout Component={MessageAdmin} />,
//   },
// ];

// // campus management -> archive
// const cmArchive = {
//   path: "/campus-manager/archive",
//   element: <AdminLayout />,
//   children: [
//     {
//       path: "",
//       element: <ArchiveAdmin />,
//     },
//     {
//       path: "class-board",
//       element: <ArchiveAdmin />,
//       children: [
//         {
//           path: "",
//           element: <ArchiveClassBoardList />,
//         },
//         {
//           path: "class-board-detail/:somethingID",
//           element: <ArchiveClassBoardDetail />,
//         },
//       ],
//     },
//     {
//       path: "class-material",
//       element: <ArchiveAdmin />,
//       children: [
//         {
//           path: "",
//           element: <ArchiveClassMaterialList />,
//         },
//         {
//           path: "class-material-detail/:somethingID",
//           element: <ArchiveClassMaterialDetail />,
//         },
//       ],
//     },
//   ],
// };

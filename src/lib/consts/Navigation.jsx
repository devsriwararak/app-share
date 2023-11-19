import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiChevronRight,
} from "react-icons/hi";
let Type = localStorage.getItem("Type");
// MAIN-ADMIN  AND  ADMIN

// export const DASHBOARD_SIDEBAR_LINKS = [
//   {
//     key: "dashboard",
//     label: Type,
//     path: "/admin",
//     icon: <HiOutlineViewGrid />,
//   },
//   {
//     key: "basicHome",
//     label: "ข้อมูลพื้นฐาน",
//     icon: <HiOutlineCube />,
//     submenuActive: 1,
//     submenu: [
//       {
//         label: "ข้อมูลบ้านแชร์",
//         key: "basicHome_1",
//         path: "/admin/basic/home",
//         icon: <HiChevronRight />,
//       },
//       {
//         label: "ข้อมูลวงค์แชร์",
//         key: "basicHome_2",
//         path: "/admin/basic/wong",
//         icon: <HiChevronRight />,
//       },
//     ],
//   },
//   Type == "admin"
//     ? { key: "noData" }
//     : {
//         key: "CrudAdmin",
//         label: "ข้อมูลผู้ดูแลระบบ",
//         path: "/admin/crud-admin",
//         icon: <HiOutlineUsers />,
//       },
//   {
//     key: "ManageBasicHome",
//     label: "ข้อมูลบ้านแชร์",
//     path: "/admin/home-share",
//     icon: <HiOutlineViewGrid />,
//   },
//   {
//     key: "ManageUser",
//     label: "ข้อมูลลูกค้า",
//     path: "/admin/manage-user",
//     icon: <HiOutlineShoppingCart />,
//   }
// ];

export const DASHBOARD_SIDEBAR_LINKS =
  Type == "main-admin" || Type == "admin" // MAIN_ADMIN - ADMIN
    ? [
        {
          key: "dashboard",
          label: Type,
          path: "/admin",
          icon: <HiOutlineViewGrid />,
        },
        {
          key: "basicHome",
          label: "ข้อมูลพื้นฐาน",
          icon: <HiOutlineCube />,
          submenuActive: 1,
          submenu: [
            {
              label: "ข้อมูลบ้านแชร์",
              key: "basicHome_1",
              path: "/admin/basic/home",
              icon: <HiChevronRight />,
            },
            {
              label: "ข้อมูลวงค์แชร์",
              key: "basicHome_2",
              path: "/admin/basic/wong",
              icon: <HiChevronRight />,
            },
          ],
        },
        Type == "admin"
          ? { key: "noData" }
          : {
              key: "CrudAdmin",
              label: "ข้อมูลผู้ดูแลระบบ",
              path: "/admin/crud-admin",
              icon: <HiOutlineUsers />,
            },

        {
          key: "ManageBasicHome",
          label: "ข้อมูลบ้านแชร์",
          path: "/admin/home-share",
          icon: <HiOutlineViewGrid />,
        },
        {
          key: "ManageUser",
          label: "ข้อมูลลูกค้า",
          path: "/admin/manage-user",
          icon: <HiOutlineShoppingCart />,
        },
      ]
    : Type == "user" // USER
    ? [
        {
          key: "dashboard",
          label: "useee",
          path: "/admin",
          icon: <HiOutlineViewGrid />,
        },
      ]
    : Type == "home" // HOME
    ? [
        {
          key: "dashboard",
          label: "homeee",
          path: "/admin",
          icon: <HiOutlineViewGrid />,
        },
      ]
    : Type == "member" ? [
      {
        key: "dashboard",
        label: "member",
        path: "/admin",
        icon: <HiOutlineViewGrid />,
      },
    ]:[]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "เมนู 7",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "เมนู 8",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];

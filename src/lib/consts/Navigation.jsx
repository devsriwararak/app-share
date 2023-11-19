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

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "ภาพรวม",
    path: "/admin",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "basicHome",
    label: "ข้อมูลพื้นฐาน",
    // path: '/admin/',
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
  // {
  // 	key: 'orders',
  // 	label: 'เมนู 3',
  // 	// path: '/admin/home',
  // 	icon: <HiOutlineShoppingCart />,
  // 	submenuActive: 2 ,
  // 	submenu : [
  // 		{label: 'B001'},
  // 		{label: 'B002'},
  // 	]
  // },
  {
    key: "CrudAdmin",
    label: "ข้อมูล ADMIN",
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

  // {
  //   key: "HomeShare",
  //   label: "จัดการเจ้าของบ้านแชร์",
  //   // path: '/admin/',
  //   icon: <HiOutlineCube />,
  //   submenuActive: 2,
  //   submenu: [
  //     {
  //       label: "ข้อมูลเจ้าของบ้านแชร์",
  //       key: "basicHome",
  //       path: "/admin/home-share",
  //       icon: <HiChevronRight />,
  //     },
  //     {
  //       label: "ข้อมูลลูกแชร์",
  //       key: "basicHome",
  //       path: "/admin/group-share",
  //       icon: <HiChevronRight />,
  //     },
  //   ],
  // },

];

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

import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiChevronRight
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'ภาพรวม',
		path: '/admin',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'basicHome',
		label: 'ข้อมูลพื้นฐาน',
		// path: '/admin/',
		icon: <HiOutlineCube />,
		submenuActive: 1 , 
		submenu : [
			{label: 'ข้อมูลบ้านแชร์', key: 'basicHome', path: '/admin/basic/home', icon: <HiChevronRight />,},
			{label: 'ข้อมูลวงค์แชร์', key: 'basicHome', path: '/admin/basic/', icon: <HiChevronRight />,},

		]
	},
	{
		key: 'orders',
		label: 'เมนู 3',
		path: '/admin/home',
		icon: <HiOutlineShoppingCart />,
		submenuActive: 2 , 
		submenu : [
			{label: 'B001'},
			{label: 'B002'},
		]
	},
	{
		key: 'customers',
		label: 'เมนู 4',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'transactions',
		label: 'เมนู 5',
		path: '/transactions',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'messages',
		label: 'เมนู 6',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'เมนู 7',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'เมนู 8',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]

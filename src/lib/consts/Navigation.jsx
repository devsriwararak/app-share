import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'ภาพรวม',
		path: '/admin',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'ข้อมูลพื้นฐาน',
		path: '/admin/basic',
		icon: <HiOutlineCube />
	},
	{
		key: 'orders',
		label: 'เมนู 3',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
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

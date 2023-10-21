import React from 'react'
import { HiOutlineViewGrid, HiCog, HiMail, HiBell, HiChip, HiClipboardList, HiCalculator, HiReceiptTax, HiLockClosed } from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid/>
    },
    {
        key: 'orders',
        label: 'Orders',
        path: '/orders',
        icon: <HiBell/>
    },
    {
        key: 'tables',
        label: 'Tables',
        path: '/tables',
        icon: <HiChip/>
    },
    {
        key: 'menus',
        label: 'Menus',
        path: '/menus',
        icon: <HiClipboardList/>
    }
    ,
    {
        key: 'accounting',
        label: 'Accounting',
        path: '/accounting',
        icon: <HiCalculator/>
    },
    {
        key: 'reports',
        label: 'Reports',
        path: '/reports',
        icon: <HiReceiptTax/>
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'settings',
        label: 'Settings',
        path: '/settings',
        icon: <HiCog/>
    },
    {
        key: 'support',
        label: 'Support',
        path: '/support',
        icon: <HiMail/>
    },
    {
        key: 'login',
        label: 'Login',
        path: '/login',
        icon: <HiLockClosed/>
    },
]


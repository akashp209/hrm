import React from 'react'
import { HiOutlineViewGrid, HiCog, HiMail, HiBell, HiChip } from 'react-icons/hi'

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
    }
]


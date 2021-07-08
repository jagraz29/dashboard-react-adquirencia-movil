import React from 'react'

import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import {
  IconHome,
  IconCobra,
  IconTransaction,
  IconIntegration,
  IconSequrity,
} from '../../config/configImages'

export const MenuItems = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: IconHome.url,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'User',
        path: '/user/list',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: '2',
        path: '/user/list2',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Cobra',
    path: '/cobra',
    icon: IconCobra.url,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'User',
        path: '/user/list',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: '2',
        path: '/user/list2',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Transacciones',
    path: '/transacciones',
    icon: IconTransaction.url,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'User',
        path: '/user/list',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: '2',
        path: '/user/list2',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Integración',
    path: '/integraciones',
    icon: IconIntegration.url,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'User',
        path: '/user/list',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: '2',
        path: '/user/list2',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'Seguridad',
    path: '/seguridad',
    icon: IconSequrity.url,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'User',
        path: '/user/list',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: '2',
        path: '/user/list2',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: 'PRUEBA',
    path: '/test/route',
    icon: IconSequrity.url,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'User',
        path: '/user/list',
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: '2',
        path: '/user/list2',
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
]

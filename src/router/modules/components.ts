import { RouteRecordRaw } from 'vue-router';
import Layout from '@/components/Layout/index.vue';

const componentsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/components',
    component: Layout,
    name: 'Components',
    redirect: '/components/json-editor',
    meta: {
      title: '组件',
      roles: ['admin', 'user'],
    },
    children: [
      {
        path: 'json-editor',
        name: 'JsonEditor',
        meta: {
          title: 'json编辑器',
          roles: ['admin', 'user'],
        },
        component: () => import('@/views/component/jsonEditor/index.vue'),
      },
      {
        path: 'tinymce',
        name: 'Tinymce',
        meta: {
          title: '富文本',
          roles: ['admin', 'user'],
        },
        component: () => import('@/views/component/tinymce/index.vue'),
      },
      {
        path: 'markdown',
        name: 'Markdown',
        meta: {
          title: 'Markdown',
          roles: ['admin', 'user'],
        },
        component: () => import('@/views/component/markdown/index.vue'),
      },
      {
        path: 'avatar-upload',
        name: 'AvatarUpload',
        meta: {
          title: '头像上传',
          roles: ['admin', 'user'],
        },
        component: () => import('@/views/component/avatarUpload/index.vue'),
      },
      {
        path: 'drag-table',
        name: 'DragTable',
        meta: {
          title: '拖拽表格',
          roles: ['admin', 'user'],
        },
        component: () => import('@/views/component/dragTable/index.vue'),
      },
      {
        path: 'timeline',
        name: 'TimeLine',
        meta: {
          title: 'timeline',
          roles: ['admin', 'user'],
        },
        component: () => import('@/views/component/timeLine/index.vue'),
      },
      {
        path: 'skeleton',
        name: 'Skeleton',
        meta: {
          title: '骨架屏',
          roles: ['admin', 'user'],
        },
        component: () => import('@/views/component/skeleton/index.vue'),
      },
      {
        path: 'carousel',
        name: 'Carousel',
        meta: {
          title: '走马灯',
          roles: ['admin', 'user'],
        },
        component: () => import('@/views/component/carousel/index.vue'),
      },
      {
        path: 'calendar',
        name: 'Calendar',
        meta: {
          title: '日历',
          roles: ['admin', 'user'],
        },
        component: () => import('@/views/component/calendar/index.vue'),
      },
    ],
  },
];

export default componentsRoutes;

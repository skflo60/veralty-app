/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [

  // rooms
  {
    path: '/rooms',
    name: 'rooms.index',
    component: () => import('@/pages/rooms/Index'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  /* Default */
  {
    path: '/',
    redirect: '/rooms',
  },

  {
    path: '/*',
    redirect: '/rooms',
  },
];

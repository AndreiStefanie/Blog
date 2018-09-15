import Blog from '@/views/Blog';
import About from '@/views/About';

export default [
  {
    path: '/',
    name: 'blog',
    component: Blog
  },
  {
    path: '/read/:postId',
    name: 'post',
    component: Blog
  },
  {
    path: '/category/:category',
    name: 'category',
    component: Blog
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '*',
    name: 'default',
    redirect: '/'
  }
];

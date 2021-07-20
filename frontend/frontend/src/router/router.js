
import { createWebHistory, createRouter } from "vue-router";

const routes = [
      {
        path: "/",
        name: "home",
        component: () => import("../pages/Home.vue")
      },
      {
        path: "/teachers",
        name: "teachers",
        component: () => import("../pages/Teachers.vue")
      },
      {
        path: "/teachers/view-teacher/:id",
        name: "view-teacher",
        component: () => import("../pages/ViewTeacher.vue")
      },
      {
        path: "/teachers/add-teacher",
        name: "add-teacher",
        component: () => import("../pages/AddTeacher.vue")
      },
      {
        path: "/students",
        name: "students",
        component: () => import("../pages/Students.vue")
      },
      {
        path: "/students/add-student",
        name: "add-student",
        component: () => import("../pages/AddStudent.vue")
      },
      {
        path: "/students/view-student/:id",
        name: "view-student",
        component: () => import("../pages/ViewStudent.vue")
      }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// window.scrollTo(0, 0)

export default router;
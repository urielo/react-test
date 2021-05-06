import Home from "./Pages/Home";
import Teste from "./Pages/Teste";
import Teste2 from "./Pages/Teste2";

export default [
  {
    name: "Home",
    isMenu: true,
    props: {
      exact: true,
      component: Home,
      path: "/",
    },
  },
  {
    name: "Teste",
    isMenu: true,
    props: {
      exact: false,
      component: Teste,
      path: "/teste",
    },
  },
  {
    name: "Teste2",
    isMenu: true,
    props: {
      exact: false,
      component: Teste2,
      path: "/teste2",
    },
  },
];

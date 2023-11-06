import {
  faBookOpen,
  faUniversity,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Zona de estudio",
    path: "/dashboard",
    icon: faUniversity,
  },
  {
    label: 'Simulacros'
  },
  {
    label: "Lista de Simulacros",
    path: "/list-simulacrums",
    icon: faList,
  },
  {
    label: "Examen por materia",
    path: "/dashboard/exams",
    icon: faBookOpen,
  },
  
];

const authMenu = [
];

export {initMenu, authMenu};
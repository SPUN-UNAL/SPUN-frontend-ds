import {
  faBookOpen,
  faLock,
  faUserPlus,
  faUniversity,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Zona de estudio",
    path: "/",
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
    path: "/exams",
    icon: faBookOpen,
  },
  
];

const authMenu = [
  {
    label: 'Autenticación',
  },
  {
    label: "Acceder",
    path: "/auth/login",
    icon: faLock,
  },
  {
    label: "Registrate",
    path: "/auth/register",
    icon: faUserPlus,
  },
];

export {initMenu, authMenu};
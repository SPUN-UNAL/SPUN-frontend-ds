import { faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faBookOpen,
  faTable,
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
    path: "/table",
    icon: faList,
  },
  {
    label: "Examen por materia",
    path: "/form",
    icon: faBookOpen,
  },
  
  {
    label: 'Recursos'
  },
  {
    label: "Form",
    path: "/form",
    icon: faWindows,
  },
  {
    label: "Table",
    path: "/table",
    icon: faTable,
  },

  {
    label: 'Autenticación'
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

export default initMenu
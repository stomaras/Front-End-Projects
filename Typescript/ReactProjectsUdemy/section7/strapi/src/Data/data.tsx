import {
    Fa500Px,
    FaAccusoft,
    FaAdversal,
    FaAvianex,
    FaBitcoin,
    FaBtc,
    FaCodiepie,
    FaBook,
    FaBriefcase,
    FaDocker,
    FaGitSquare
} from "react-icons/fa";
import { nanoid } from "nanoid";

const sublinks = [
    {
        pageId: nanoid(),
        page: 'product',
        links: [
            { id: nanoid(), label: 'community', icon: <Fa500Px />, url: '/product/community'},
            { id: nanoid(), label: 'content', icon: <FaAccusoft />, url: '/product/content'},
            { id: nanoid(), label: 'roles', icon: <FaAdversal />, url: '/product/roles'},
        ]
    },
    {
        pageId: nanoid(),
        page: 'developers',
        links: [
          { id: nanoid(), label: 'plugins', icon: <FaBook />, url: '/developers/plugins' },
          { id: nanoid(), label: 'libraries', icon: <FaBook />, url: '/developers/libraries' },
          { id: nanoid(), label: 'help', icon: <FaBook />, url: '/developers/help' },
          { id: nanoid(), label: 'billing', icon: <FaBook />, url: '/developers/billing' },
        ]
    },
    {
        pageId: nanoid(),
        page: 'company',
        links: [
          { id:nanoid(),  label: 'about', icon: <FaBriefcase />, url: '/company/about' },
          { id:nanoid() , label: 'customers', icon: <FaBriefcase />, url: '/company/customers' },
        ]
    },
]
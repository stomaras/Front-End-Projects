import {
    Fa500Px,
    FaAccusoft,
    FaAdversal,
    FaAvianex,
    FaBitcoin,
    FaBtc,
    FaCodiepie,
    FaDocker,
    FaGithubSquare,
  } from 'react-icons/fa';
  import { nanoid } from 'nanoid';
import { ISublink } from '../models/models';
  
  const sublinks:ISublink[] = [
    {
      pageId: nanoid(),
      page: 'product',
      links: [
        {
          id: nanoid(),
          label: 'community',
          url: '/product/community',
        },
        {
          id: nanoid(),
          label: 'content',
          url: '/product/content',
        },
        {
          id: nanoid(),
          label: 'roles',
          url: '/product/roles',
        },
      ],
    },
    {
      pageId: nanoid(),
      page: 'solutions',
      links: [
        {
          id: nanoid(),
          label: 'developers',
          url: '/solutions/developers',
        },
        {
          id: nanoid(),
          label: 'content managers',
          url: '/solutions/content-managers',
        },
        {
          id: nanoid(),
          label: 'business teams',
          url: '/solutions/business teams',
        },
        {
          id: nanoid(),
          label: 'ecommerce',
          url: '/solutions/ecommerce',
        },
      ],
    },
    {
      page: 'resources',
      pageId: nanoid(),
      links: [
        {
          id: nanoid(),
          label: 'starters',
          url: '/resources/starters',
        },
        {
          id: nanoid(),
          label: 'showcase',
          url: '/resources/showcase',
        },
      ],
    },
  ];
  
  export default sublinks;
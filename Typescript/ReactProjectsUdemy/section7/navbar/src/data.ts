import React from 'react'
import { FaFan, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

export interface SocialInterface {
    id: number;
    url: string;
}

export interface LinksInterface {
    id: number;
    url: string;
    text: string;
}

export const links: LinksInterface[] = [
  {
    id: 1,
    url: '/',
    text: 'random',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
  {
    id: 6,
    url: '/extra',
    text: 'extra',
  },
]

export const social: SocialInterface[] = [
  {
    id: 1,
    url: 'https://www.twitter.com',
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
  },
]
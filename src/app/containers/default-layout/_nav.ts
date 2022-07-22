import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
    title: true,
    name: 'MARGIN MAKER'
  },
  {
    name: 'Business unit context ',
    url: '/dashboard',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Account context ',
    url: '/dashboard',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Jounrnal entry ',
    url: '/dashboard',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Accounts',
    url: '/dashboard',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Finacial Settlement',
    url: '/dashboard',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'EoP Operations',
    url: '/dashboard',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Histoy browsing',
    url: '/dashboard',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Business configuration',
    url: '/dashboard',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Core Files',
    url: '/dashboard',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Settlement parameters',
    iconComponent: { name: 'cil-notes' },
    url: '/parameters',
    children: [
      {
        name: 'Instrument types',
        url: '/parameters/channels',
        
      },
      {
        name: 'Settlment channels',
        url: '/parameters/channels',
        
      },
      {
        name: 'Settlement configurations',
        url: '/parameters/channels',
         
      },
    ]
  },
  {
    name: 'NLconfiguration',
    url: '/dashboard',
    iconComponent: { name: 'cil-notes' },
  },
  {
    name: 'Call handling config',
    url: '/dashboard',
    iconComponent: { name: 'cil-notes' },
  },
];

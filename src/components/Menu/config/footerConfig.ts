import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.myteamex.com/contact-us',
      },
      {
        label: t('Blog'),
        href: 'https://myteamcoin.medium.com/',
      },
      {
        label: t('Community'),
        href: 'https://docs.myteamex.com/contact-us/telegram',
      },
      {
        label: t('MYC token'),
        href: 'https://docs.myteamex.com/tokenomics/myc',
      },
      {
        label: '—',
      },
      // {
      //   label: t('Online Store'),
      //   href: 'https://myteamex.creator-spring.com/',
      //   isHighlighted: true,
      // },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.myteamex.com/contact-us/customer-support',
      },
      // {
      //   label: t('Troubleshooting'),
      //   href: 'https://docs.myteamex.com/help/troubleshooting',
      // },
      {
        label: t('Guides'),
        href: 'https://docs.myteamex.com/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/myteamex',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.myteamex.com',
      },
      // {
      //   label: t('Bug Bounty'),
      //   href: 'https://app.gitbook.com/@myteamex-1/s/myteamex/code/bug-bounty',
      // },
      // {
      //   label: t('Audits'),
      //   href: 'https://docs.myteamex.com/help/',
      // },
      // {
      //   label: t('Careers'),
      //   href: 'https://docs.myteamex.com/hiring/become-a-chef',
      // },
    ],
  },
]

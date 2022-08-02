import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MyTeamEx',
  description:
    'The most popular AMM on BSC by user count! Earn MYC through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by MyTeamEx), NFTs, and more, on a platform you can trust.',
  image: 'https://myteamex.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MyTeamEx')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('MyTeamEx')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('MyTeamEx')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('MyTeamEx')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('MyTeamEx')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('MyTeamEx')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MyTeamEx')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MyTeamEx')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('MyTeamEx')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MyTeamEx')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('MyTeamEx')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MyTeamEx')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MyTeamEx')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('MyTeamEx')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MyTeamEx')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MyTeamEx')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('MyTeamEx')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('MyTeamEx')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('MyTeamEx')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('MyTeamEx')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('MyTeamEx')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('MyTeamEx Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('MyTeamEx Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Pools')} | ${t('MyTeamEx Info & Analytics')}`,
        description: 'View statistics for Pancakeswap exchanges.',
      }
    default:
      return null
  }
}

import { WalletEndpoint } from '@parrotfi/wallets'
import { web3 } from '@project-serum/anchor'
import BigNumber from 'bignumber.js'
import moment from 'moment'

export const NETWORK = process.env.NEXT_PUBLIC_NETWORK
export const VERSION = process.env.NEXT_PUBLIC_VERSION

/**
 * Used for lending page countdown
 */
export const IDO_STARTS = moment(process.env.NEXT_PUBLIC_IDO_START)

export const RPC_ENDPOINTS: WalletEndpoint[] = [
  {
    id: 'mainnet-1',
    network: 'mainnet-beta' as web3.Cluster,
    rpcURL: 'https://aurory.genesysgo.net',
    rpcName: 'GenesysGo',
    commitment: 'processed' as web3.Commitment,
  },
  {
    id: 'mainnet-2',
    network: 'mainnet-beta' as web3.Cluster,
    rpcURL: 'https://aurory.rpcpool.com',
    rpcName: 'Triton RPC',
    commitment: 'processed' as web3.Commitment,
  },
  {
    id: 'custom',
    network: 'mainnet-beta' as web3.Cluster,
    rpcURL: 'https://api.mainnet-beta.solana.com',
    rpcName: 'Custom RPC',
    commitment: 'processed' as web3.Commitment,
  },
  // {
  //   id: 'dev',
  //   network: 'devnet' as web3.Cluster,
  //   rpcURL: 'https://api.devnet.solana.com',
  //   rpcName: 'Devnet RPC',
  //   commitment: 'processed' as web3.Commitment,
  // },
]

export const IDO_RESULTS = {
  'Adh2XopZ6boGccwNLcUJa9tqjEp6iH6D4wxk7TNcbvaT': {},
}

export const IDO_ENDPOINTS = [
  {
    network: 'mainnet-beta' as web3.Cluster,
    programId: 'Fh2t1QqYqbpp6A51dhNBKkByKo6hfZSAzMJXTZSRhsWi',
    usdcMint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    pools: ['Adh2XopZ6boGccwNLcUJa9tqjEp6iH6D4wxk7TNcbvaT'],
  },
  // {
  //   network: 'devnet' as web3.Cluster,
  //   programId: 'BwneGSVf5yk6ZHKPABuEbrDPGfgkeHyT4GH2hSZqVM8t',
  //   usdcMint: '9J6RFJQ3VGj216scddD4w6aBcpGy8oxxcwng8StKoNEt',
  //   pools: [
  //     'DQRdatV3UUcVvW5ZUpi8tSm6vzJfqVFvVZGjmapANKU9'
  //   ],
  // },
]

const defaultNode = undefined

export const DEFAULT_RPC = RPC_ENDPOINTS.find((i) => {
  const r = i.id === `mainnet-1`
  return r
})

export const RANDOM_DEFAULT_RPC_INDEXES = [0, 1]

import React from 'react'

import ConnectWallet from '../account/ConnectWallet'
import { Logo } from '../logo'
import { RpcSwitcher } from './RpcSwitcher'

export const Header: React.FC = () => {
  return (
    <header className="absolute px-2 sm:px-6 w-full z-10 h-auto mt-2">
      <div className="flex flex-row justify-center">
        <div>{/* <Logo /> */}</div>
        <div className="flex flex-row space-x-2 sm:space-x-2">
          <RpcSwitcher />
          <ConnectWallet />
        </div>
      </div>
    </header>
  )
}

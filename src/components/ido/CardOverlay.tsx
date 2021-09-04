import moment from 'moment'
import React, { ReactNode } from 'react'
import CardBase from './CardBase'
import PoolCountdown from './PoolCountdown'

interface CardOverlayProps {
  startIdo: moment.Moment
  endDeposits: moment.Moment
  endIdo: moment.Moment
  startRedeem: moment.Moment
  title: string
  children: ReactNode
}

const CardOverlay: React.FC<CardOverlayProps> = ({
  children,
  startIdo,
  endDeposits,
  startRedeem,
  endIdo,
  title,
}) => {
  const notStarted = startIdo.isAfter()
  const noDeposits = endDeposits.isBefore()
  const notRedeem = endIdo.isBefore() && startRedeem.isAfter()

  const hasEnded = endIdo.isBefore()
  const hasOverlay = notStarted || notRedeem

  return (
    <CardBase
      title={title}
      overlayContent={
        hasOverlay && (
          <div className="absolute z-10 w-full px-8 h-full flex items-center justify-center">
            <div className="bg-white w-full p-6 rounded-3xl flex flex-col items-center space-y-3">
              {notStarted && <h3>Entry Starts</h3>}
              {notRedeem && <h3>Redeem Starts</h3>}
              <PoolCountdown date={notStarted ? startIdo : startRedeem} />
            </div>
          </div>
        )
      }
      titleRight={
        !hasEnded && (
          <div className="bg-brandSecondary rounded-3xl mt-1 px-3 py-2 text-xs font-bold">
            {noDeposits ? 'Grace Period' : 'Sale Period'}
          </div>
        )
      }
    >
      {children}
    </CardBase>
  )
}

export default CardOverlay

import { useState, FC } from 'react'
import moment from 'moment'
import * as React from 'react'

interface IClock {
  format: string
  delayTimer: number
}
const Clock: FC<IClock> = (props: IClock) => {
  const { format, delayTimer } = props

  const initialTime = moment().format(format)
  const [currentTime, setCurrentTime] = useState(initialTime)

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format(format))
    }, delayTimer)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return <>{currentTime}</>
}

export default Clock

import React from 'react'
import GreenCheckmark from '~/assets/images/checkmark-green.svg'
import OrangeCheckmark from '~/assets/images/orange-checkmark.svg'
import CancelIcon from '~/assets/images/cancel-checkmark.svg'

export default function TextWithIcon({ text, type }) {
  return (
    <div className="flex items-center mb-5">
      {type === 'green' && <GreenCheckmark className="inline mr-2" />}
      {type === 'orange' && <OrangeCheckmark className="inline mr-2" />}
      {type === 'cancel' && <CancelIcon className="inline mr-2" />}
      <p>{text}</p>
    </div>
  )
}

import GenAvatar from './genAvatar'
import { ReactNode } from 'react'

interface Props {
  name?: string
  feedback?: string
  cups: number
}

const GenerateFeedback = ({ name, feedback, cups }: Props) => {
  let title: ReactNode
  let note: string | undefined

  if (name && feedback) {
    title = <><strong>{name}</strong> sent you {cups} cups of chaai</>
    note = feedback
  } else if (name) {
    title = <><strong>{name}</strong> sent you {cups} cups of chaai</>
  } else if (feedback) {
    title = <><strong>Someone</strong> sent you {cups} cups of chaai</>
    note = feedback
  } else {
    title = <><strong>Someone</strong> just sent you {cups} cups of chaai</>
  }

  return (
    <div className="feedback-card flex items-center mb-3 w-full">
      {name && <GenAvatar className='mr-3' name={name} />}
      <div className='w-full'>
        <h4>{title}</h4>
        {note && <div className='mainFeedback bg-[rgb(var(--primary-50))] rounded-sm p-3'><p className='!text-sm'>{note}</p></div>}
      </div>
    </div>
  )
}

export default GenerateFeedback

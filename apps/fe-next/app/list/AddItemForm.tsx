import { useState, useRef } from 'react'
import { addItem } from '@/app/api'
import style from './AddItemForm.module.css'

type Props = {
  listId: number
  afterSuccessfulSubmit?: () => void
}

export const AddItemForm = ({ listId, afterSuccessfulSubmit }: Props): JSX.Element => {
  const [isBusy, setIsBusy] = useState(false)
  const [formError, setFormError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleAddItem = async (data: FormData) => {
    setIsBusy(true)
    setFormError('')

    const error = await addItem({
      listId,
      title: (data.get('title') as string) ?? '',
      description: (data.get('description') as string) ?? '',
      checked: false,
    })

    setIsBusy(false)
    if (error) {
      setFormError(error)
    } else {
      formRef.current?.reset()
      afterSuccessfulSubmit?.()
    }
  }

  return (
    <section className={style.formWrapper}>
      <h1 className={style.header}>Add item</h1>
      <form className={style.form} action={handleAddItem} ref={formRef}>
        <input type="hidden" name="listId" value={listId} />
        <input type="text" name="title" placeholder="Title" />
        <textarea name="description" placeholder="Description (optional)" rows={3}></textarea>
        <footer>
          <button type="submit" disabled={isBusy}>
            Add!
          </button>
          {formError && <p className={style.error}>{formError}</p>}
        </footer>
      </form>
    </section>
  )
}

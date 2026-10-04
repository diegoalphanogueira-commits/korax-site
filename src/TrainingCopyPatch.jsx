import { useEffect } from 'react'

export default function TrainingCopyPatch() {
  useEffect(() => {
    const corrected = 'A Korax não aprende só o que sua empresa sabe. Ela aprende como sua empresa conduz um cliente, da primeira mensagem até o próximo passo.'

    const applyCopy = () => {
      const paragraph = document.querySelector('.v5-training-copy > p')
      if (paragraph && paragraph.textContent !== corrected) {
        paragraph.textContent = corrected
      }
    }

    applyCopy()

    const observer = new MutationObserver(applyCopy)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return null
}

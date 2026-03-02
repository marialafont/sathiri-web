import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ImageLightbox = ({ image, onClose }) => {
  useEffect(() => {
    if (!image) return
    document.body.style.overflow = 'hidden'
    const onKeyDown = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [image, onClose])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="max-w-[75vw] max-h-[75vh] object-contain rounded shadow-2xl"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            onClick={e => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { ImageLightbox }

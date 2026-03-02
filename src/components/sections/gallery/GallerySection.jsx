import { useState, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button, ImageLightbox } from '../../ui'

const MotionDiv = motion.div

const GallerySection = () => {
  const [visibleCount, setVisibleCount] = useState(20)
  const [selectedImage, setSelectedImage] = useState(null)
  const prevCountRef = useRef(0)

  const allImages = useMemo(() => {
    const imageModules = import.meta.glob('/src/assets/images/gallery/*.webp', {
      eager: true,
      import: 'default',
    })

    const images = Object.entries(imageModules).map(([path, url], index) => {
      const filename = path.split('/').pop().replace('.webp', '')
      return {
        id: index + 1,
        src: url,
        alt: `Sathiri hat - ${filename}`,
      }
    })

    return images.sort(() => Math.random() - 0.5)
  }, [])

  const visibleImages = allImages.slice(0, visibleCount)
  const hasMore = visibleCount < allImages.length

  const handleLoadMore = () => {
    prevCountRef.current = visibleCount
    setVisibleCount(prev => Math.min(prev + 8, allImages.length))
  }

  return (
    <section id="galeria" className="bg-background pb-16 md:pb-24 lg:pb-36">
      <div className="main-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleImages.map((image, index) => {
            const isNew = index >= prevCountRef.current
            const delay = isNew ? (index - prevCountRef.current) * 0.07 : 0

            return (
              <MotionDiv
                key={image.id}
                className="aspect-square overflow-hidden rounded cursor-pointer"
                initial={isNew ? { opacity: 0, y: 18 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </MotionDiv>
            )
          })}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-12">
            <Button variant="primary" onClick={handleLoadMore}>
              Ver más
            </Button>
          </div>
        )}
      </div>

      <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  )
}

export { GallerySection }

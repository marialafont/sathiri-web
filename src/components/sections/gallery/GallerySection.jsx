import { useState, useMemo } from 'react'
import { Button } from '../../ui'

const GallerySection = () => {
  const [visibleCount, setVisibleCount] = useState(20)

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
    setVisibleCount(prev => Math.min(prev + 8, allImages.length))
  }

  return (
    <section id="galeria" className="bg-background pb-16 md:pb-24 lg:pb-32">
      <div className="main-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleImages.map(image => (
            <div
              key={image.id}
              className="aspect-square overflow-hidden rounded"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-12">
            <Button variant="primary" onClick={handleLoadMore}>
              Ver más
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export { GallerySection }

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface LazyImageProps {
    src: string
    alt?: string
}

function LazyImage(props: LazyImageProps) {
    const { src, alt } = props

    return (
        <LazyLoadImage
            className=''
            src={src}
            alt={alt || 'image'}
            effect='blur'
            width='100%'
            height='100%'
            style={{ objectFit: 'cover' }}
        />
    )
}
export default LazyImage

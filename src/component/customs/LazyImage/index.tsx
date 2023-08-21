// import { LazyLoadImage } from 'react-lazy-load-image-component'
// import 'react-lazy-load-image-component/src/effects/blur.css'

interface LazyImageProps {
    src: string
    alt?: string
    sx?: string
}

function LazyImage(props: LazyImageProps) {
    const { src, alt, sx } = props

    return (
        <img
            className={sx}
            src={src}
            alt={alt || 'image'}
            // effect='blur'
            // width='100%'
            // height='100%'
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
    )
}
export default LazyImage

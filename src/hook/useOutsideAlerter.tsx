// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect } from 'react'

// interface TypeOutsideAlerter {
//     ref: {
//         current: any
//     }
//     open?: boolean
//     setOpen?: React.Dispatch<React.SetStateAction<boolean>>
// }

// function useOutsideAlerter(props: TypeOutsideAlerter) {
//     const { ref, open, setOpen } = props

//     useEffect(() => {
//         function handleClickOutside(event: MouseEvent<T = Element, E = MouseEvent>) {
//             // if (ref.current && !ref.current.contains(event.target)) {
//             //     alert('You clicked outside of me!')
//             // }
//             open && setOpen(false)
//         }

//         // gắn sự kiện lên document
//         document.addEventListener('mousedown', handleClickOutside)
//         return () => {
//             // loại bỏ sự kiện
//             document.removeEventListener('mousedown', handleClickOutside)
//         }
//     }, [ref])
// }
// export default useOutsideAlerter

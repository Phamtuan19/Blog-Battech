/* eslint-disable @typescript-eslint/no-explicit-any */

const Loadable = (Component: any) => (props: any) => {
    return <Component {...props} />
}
export default Loadable

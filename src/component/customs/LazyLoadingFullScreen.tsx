export default function LazyLoadingFullScreen() {
    return (
        <div className='absolute w-full h-full'>
            <div className='flex h-full w-full items-center justify-center'>
                <div className='w-[400px]'>
                    <h1 className='text-center mb-2'>Loading</h1>
                    {/* <LinearProgress color='primary' /> */}
                </div>
            </div>
        </div>
    )
}

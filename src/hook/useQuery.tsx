/* eslint-disable prefer-const */
import React from 'react'
import { useLocation } from 'react-router-dom'

function useQuery() {
    let { search } = useLocation()

    return React.useMemo(() => new URLSearchParams(search), [search])
}
export default useQuery

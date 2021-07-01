import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import cx from 'classnames'

import styles from './styles.module.scss'

const Navbar = () => {
    const location = useLocation()
    const pages = [
        { url: '/use-state', name: 'useState' },
        { url: '/use-effect', name: 'useEffect' },
        { url: '/use-context', name: 'useContext' },
        { url: '/use-layout-effect', name: 'useLayoutEffect' },
        { url: '/use-reducer', name: 'useReducer' },
        { url: '/use-callback', name: 'useCallback' },
        { url: '/use-memo', name: 'useMemo' },
        { url: '/use-ref', name: 'useRef' }
    ]
    return (
        <header className={styles.containerHeader}>
            {pages.map(page =>
                <Link key={page.url} className={cx(styles.pageLink, location.pathname === page.url ? styles.active : '')} to={page.url}>
                    {page.name}
                </Link>)
            }
        </header>
    )
}

export default Navbar

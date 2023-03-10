import React, { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import NavigationHome from './componentes/NavigationHome'
import DestaqueHome from './componentes/DestaqueHome'
import SectionFilmes from './componentes/SectionFilmes'
import Divisoria from './componentes/Divisoria'
import './index.css'
const root = createRoot(document.getElementById('root'))
localStorage.clear()

root.render(
    <Fragment>
        <NavigationHome />
        <Divisoria />
        <DestaqueHome />
        <Divisoria />
        <SectionFilmes />
    </Fragment>
)


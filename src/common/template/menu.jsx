import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem label='Dashboard' icon='dashboard' path='/'/>
        <MenuTree label='Billing Cycles' icon='dollar'>
            <MenuItem path='#billingCycles' icon='list' label='List'/>
            <MenuItem path='#billingCyclesRegister' icon='plus' label='Register'/>
        </MenuTree>
    </ul>
)
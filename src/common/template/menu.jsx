import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem label='Dashboard' icon='dashboard' path='/'/>
        <MenuTree label='Register' icon='plus'>
            <MenuItem path='#billingCycles' icon='usd' label='Billing Cycle'/>
        </MenuTree>
    </ul>
)
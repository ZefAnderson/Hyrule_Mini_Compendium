import { NavLink } from "react-router-dom"

export  function LinkList() {
    
    return (
        <nav>
            <NavLink to='/' className="NavLinkList">Treasures</NavLink>
            <NavLink to='/creaturesf' className="NavLinkList">Creatures (food)</NavLink>
            <NavLink to='/creaturesnf' className="NavLinkList">Creatures (non-food)</NavLink>
            <NavLink to='/equipment' className="NavLinkList">Equipment</NavLink>
            <NavLink to='/materials' className="NavLinkList">Materials</NavLink>
            <NavLink to='/monsters' className="NavLinkList">Monsters</NavLink>
        </nav>
    )
}





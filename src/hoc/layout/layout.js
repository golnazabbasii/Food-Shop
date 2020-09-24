import React from "react"
import Wrapper from "../../hoc/wrapper/wrapper"
import Navigation from "../../components/navigation/navbar"

const Layout=props=>{
return(
<Wrapper>
<Navigation/>
<main className="container">
    {props.children}
</main>

</Wrapper>
)
}

export default Layout
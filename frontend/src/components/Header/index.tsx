import { HeaderProps } from "../../types/types";
import { ComponentHeader,Icon } from "./style"
import gitCat from '../../images/github_header.png'
function Header ({text, href}: HeaderProps ){
return (
  <ComponentHeader>
    <Icon src={gitCat} alt="Gatinho-github" />
    <a href={href}>{text}</a>
  </ComponentHeader>
)

}

export default Header;
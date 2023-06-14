import { StyledHeader, StyledNav } from "../UI";
import mailIcon from "../../assets/images/forward_to_inbox_FILL0_wght400_GRAD0_opsz24.svg";

export function TopMenu() {
  return (
    <StyledHeader>
      <StyledNav>
        <li className="logo">
          <a href="#overview">Vinicius Bastos</a>
        </li>
        <span>
          <li>
            <a href="#sobre">Sobre mim</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#">Hobbies</a>
          </li>
          <li>
            <a href="#">Formação</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
        </span>
        <li>
          <a
            href="mailto:vclemente2@hotmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <img src={mailIcon} alt="Ícone Para Email" />
            {window.innerWidth <= 375 ? "" : "vclemente2@hotmail.com"}
          </a>
        </li>
      </StyledNav>
    </StyledHeader>
  );
}

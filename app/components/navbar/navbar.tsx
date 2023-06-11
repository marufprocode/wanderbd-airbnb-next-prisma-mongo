import Container from "../shared/container";
import Logo from "./logo";
import Search from "./search";
import UserMenu from "./userMenu";


export default function Navbar() {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b">
            <Container>
                <div className="flex w-full justify-between items-center gap-3 md:gap-0">
                  <Logo/>
                  <Search/>
                  <UserMenu/>
                </div>
            </Container>
        </div>
    </div>
  )
}

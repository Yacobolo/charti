import { Navbar } from "@mantine/core";
import { MainLinks } from "./_main_links";
import { User } from "./_user";

interface NavbarProps {
  opened: boolean;
}

const NavbarComponent: React.FC<NavbarProps> = ({ opened }) => {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section grow mt="xs">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
};
export default NavbarComponent;

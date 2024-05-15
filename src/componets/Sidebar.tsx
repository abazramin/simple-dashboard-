import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  CalendarIcon,
  EditIcon,
  InfoOutlineIcon,
  SettingsIcon,
} from "@chakra-ui/icons";

const Sidebar = () => {
  return (
    <List fontSize="1.23rem" spacing="20px">
      {/*  */}
      <ListItem>
        <ListIcon as={CalendarIcon} />
        <NavLink to="/">Dashborad</NavLink>
      </ListItem>
      {/*  */}
      <ListItem>
        <ListIcon as={InfoOutlineIcon} />
        <NavLink to="/profile">Profile</NavLink>
      </ListItem>
      {/*  */}
      <ListItem>
        <ListIcon as={EditIcon} />
        <NavLink to="/create">Create</NavLink>
      </ListItem>
      {/*  */}
      <ListItem>
        <ListIcon as={SettingsIcon} />
        <NavLink to="/setting">Settings</NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;

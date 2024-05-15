import {
  EmailIcon,
  InfoIcon,
  MoonIcon,
  StarIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  TabPanel,
  Tab,
  TabList,
  Tabs,
  TabPanels,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

const Prodfile = () => {
  return (
    <Tabs mt="40px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab>profile</Tab>
        <Tab>Task Histroy</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={6}>
            <ListItem>
              <ListIcon as={InfoIcon} />
              Name: Subs
            </ListItem>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: example.@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Description: Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Exercitationem harum ea sunt dicta cupiditate, incidunt vel
              deserunt voluptatibus voluptates libero.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={SunIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              molestias!
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              molestias!
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              molestias!
            </ListItem>
            <ListItem>
              <ListIcon as={MoonIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              molestias!
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              molestias!
            </ListItem>
            <ListItem>
              <ListIcon as={SunIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
              molestias!
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Prodfile;

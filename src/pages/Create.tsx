import { LinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Form } from "react-router-dom"; 

interface Task {
  id: number;
  task: string;
}

const create = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>("");

  const addNewTask = () => {
    if (newTaskText.trim() !== "") {
      const newTask: Task = {
        id: tasks.length + 1,
        task: newTaskText.trim(),
      };
      setNewTaskText("");
      setTasks([...tasks, newTask]);
    }
  };
  return (
    <>
      <Grid templateColumns="repeat(2 , 1fr)">
        <GridItem as="div" colSpan={1} p={10} minWidth="480px">
          <Box p="40px">
            <Form>
              <FormControl isRequired>
                <FormLabel>Enter Your Task Name</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setNewTaskText(e.target.value)}
                />
                <FormHelperText>Enter The Discrptions </FormHelperText>
              </FormControl>

              <Button onClick={addNewTask} type="submit" my="30px">
                Add Task
              </Button>
            </Form>
          </Box>
        </GridItem>
        <GridItem as="div" colSpan={1} p={10} fontSize="1.23rem">
          <Box p="40px" border={1}>
            <Heading mb={2}>Hsitory</Heading>
            <List spacing={10}>
              {tasks.map((task) => {
                return (
                  <ListItem pb={4} borderBottom="2px solid" key={task.id}>
                    {" "}
                    <ListIcon as={LinkIcon} /> {task.task}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default create;

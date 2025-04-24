import { Accordion } from "./components";

export const AccordianApp = () => {
  return (
    <Accordion allowMultiple>
      <Accordion.Item index={0}>
        <Accordion.Header>Question 1</Accordion.Header>
        <Accordion.Panel>Answer 1</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item index={1}>
        <Accordion.Header>Question 2</Accordion.Header>
        <Accordion.Panel>Answer 2</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

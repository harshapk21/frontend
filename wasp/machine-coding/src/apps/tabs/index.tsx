import { Tabs } from "./components";

export const TabsApp = () => {
  return (
    <Tabs defaultIndex={0}>
      <Tabs.List>
        <Tabs.Trigger>Tab One</Tabs.Trigger>
        <Tabs.Trigger>Tab Two</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Panel index={0}>Content for Tab One</Tabs.Panel>
      <Tabs.Panel index={1}>Content for Tab Two</Tabs.Panel>
    </Tabs>
  );
};

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <div className="flex flex-col max-w-[200px] space-y-6 mx-auto">
        <h1 className="text-4xl text-center">Buttons</h1>
        <Button>Default</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="primaryOutline">Primary Outline</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="secondaryOutline">secondary Outline</Button>
        <Button variant="danger">danger</Button>
        <Button variant="dangerOutline">danger Outline</Button>
        <Button variant="pro">Pro</Button>
        <Button variant="proOutline">Pro Outline</Button>
        <Button variant="sidebar">Sidebar</Button>
        <Button variant="sidebarOutline">Sidebar Outline</Button>
      </div>
    </>
  );
}

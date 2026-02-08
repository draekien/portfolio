import { BrowserWindow } from "@/components/ui/browser-window";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div>
      <h1>Hello!</h1>
      <Button variant="default">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <div className="flex p-8 bg-muted/30 rounded-xl border max-w-prose">
        <BrowserWindow variant="chrome" size="lg" className="w-full">
          <div className="p-8">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome to your dashboard</p>
          </div>
        </BrowserWindow>
      </div>
    </div>
  );
}

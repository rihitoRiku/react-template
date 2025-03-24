import HelloWorldSection from "@/components/sections/hello-world-section";
import ServerGreeting from "@/components/sections/server-greeting";

export default function Home() {
  return (
    <div className="">
      {/* server components */}
      <ServerGreeting />
      {/* client components */}
      <HelloWorldSection />
    </div>
  );
}

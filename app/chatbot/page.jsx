import Header from "@/components/Header";
import Tracker from "@/components/Tracker";
import Chat from "@/components/Chat";
import { site } from "@/lib/data";

export const metadata = { title: "Ask the assistant" };

export default function ChatPage() {
  return (
    <>
      <Header name={site.name} />
      <Tracker path="/chatbot" />
      <main className="wrap sec narrow">
        <h1 className="h1-sm">Ask the assistant</h1>
        <Chat name={site.name} />
      </main>
    </>
  );
}

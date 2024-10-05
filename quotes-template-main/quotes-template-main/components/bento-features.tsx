import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {
  CopyIcon,
  FileTextIcon,
  GlobeIcon,
  ChatBubbleIcon
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: FileTextIcon,
    name: "AI-Generated Environmental Reports",
    description:
      "Our AI model generates concise reports about the latest changes in the environment and helps in strategic planning for the future.",
    href: "/ai-environment-report",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="background" />,
  },
  {
    Icon: GlobeIcon,
    name: "Satellite Imaging Analysis",
    description: "Our AI model leverages computer vision to analyze satellite imagery, providing insights for monitoring and planning.",
    href: "/ai-satellite-analysis",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="background" />,
  },
  {
    Icon: ChatBubbleIcon,
    name: "Conversational AI Chatbot",
    description: "Experience a smart chatbot that can talk to you and provide real-time assistance in a conversational manner.",
    href: "/ai-chatbot",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" alt="background" />,
  }
];

export async function BentoDemo() {
  return (
    <BentoGrid className="grid grid-cols-3 gap-6"> {/* Side by side vertical stacks */}
      {features.map((feature, idx) => (
        <div key={idx} className="flex flex-col space-y-4"> {/* Add the key prop here */}
          <BentoCard
            Icon={feature.Icon}
            name={feature.name}
            description={feature.description}
            href={feature.href}
            cta={feature.cta}
            background={feature.background}
            className="relative p-6 bg-gray-800 rounded-lg shadow-lg" // Added styling for each card
          />
        </div>
      ))}
    </BentoGrid>
  );
}

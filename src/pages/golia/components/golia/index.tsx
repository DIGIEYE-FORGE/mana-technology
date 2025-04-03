import { GoliaBot, GoliaWidget } from "golia-chatbot";
import { useAppContext } from "@/Context";
import { useEffect, useState } from "react";
import { env } from "@/utils/env";

export function Golia() {
  const { user } = useAppContext();
  const [bot, setBot] = useState<GoliaBot | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // Initialize bot with user info

  useEffect(() => {
    if (!user || bot) return;
    // Initialize bot with user info
    const initBot = async () => {
      setIsLoading(true);

      const goliaBot = new GoliaBot({
        name: "Golia",
        apiEndpoint: "https://goliya.digieye.io/api/",

        greeting:
          "Salut! Je suis Golia, votre assistant virtuel. Comment puis-je vous aider aujourd'hui?",
        user: {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          avatar: user.avatar
            ? env.VITE_BACKEND_API + "/uploads" + user.avatar
            : undefined,
        },
      });

      // Wait a moment for authentication to complete
      setTimeout(() => {
        setBot(goliaBot);
        setIsLoading(false);
      }, 1000);
    };

    initBot();
  }, [user]);

  if (isLoading || bot === null) return null;

  return (
    <GoliaWidget
      bot={bot}
      position="bottom-right"
      placeholder="Ask me anything..."
      primaryColor="#f4a81d"
      // botAvatarUrl="https://example.com/bot-avatar.jpg"
    />
  );
}

import CopyButton from "@/components/CopyButton";
import MotionWrapper from "@/components/MotionWrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaSteam,
  FaTwitch,
  FaXTwitter,
} from "react-icons/fa6";
import {
  IoDocumentOutline,
  IoGameControllerOutline,
  IoGridOutline,
} from "react-icons/io5";
import { SiRiotgames } from "react-icons/si";

const profileData = {
  name: "ましろ㌠",
  bio: "Game / Dev / Accounting",
  serverUrl: "https://discord.gg/e36y4zTbPm",
  links: {
    x: {
      id: "@mashirovoc",
      url: "https://x.com/mashirovoc",
      icon: FaXTwitter,
      label: "X (Twitter)",
    },
    instagram: {
      id: "@mashirovoc",
      url: "https://instagramcom/mashirovoc",
      icon: FaInstagram,
      label: "Instagram",
    },
    steam: {
      id: "mashiro3LoL",
      url: "https://steamcommunity.com/id/mashiro3LoL/",
      icon: FaSteam,
      label: "Steam",
    },
    twitch: {
      id: "mashiro3lol",
      url: "https://www.twitch.tv/mashiro3lol",
      icon: FaTwitch,
      label: "Twitch",
    },
    github: {
      id: "mashirovoc",
      url: "https://github.com/mashirovoc",
      icon: FaGithub,
      label: "Github",
    },
  },
  ids: {
    discord: {
      id: "mashirovoc",
      icon: <FaDiscord className="h-5 w-5" />,
      label: "Discord User",
    },
    riot: {
      id: "mashiro3#0000",
      icon: <SiRiotgames className="h-5 w-5" />,
      label: "Riot ID",
    },
  },
};
const ProfilePage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-muted/40 p-4">
      <MotionWrapper className="w-full max-w-md">
        <Card className="w-full my-8">
          <CardHeader className="flex flex-col items-center gap-4 pb-2">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://github.com/mashirovoc.png"
                alt={profileData.name}
              />
              <AvatarFallback>ましろ</AvatarFallback>
            </Avatar>

            <div className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">
                {profileData.name}
              </CardTitle>
              <CardDescription className="text-base mt-1 text-muted-foreground">
                {profileData.bio}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Button
                className="w-full h-12 text-base font-bold bg-[#5865F2] hover:bg-[#4752C4] text-white transition-all hover:scale-[1.02]"
                asChild
              >
                <Link
                  href={profileData.serverUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDiscord className="mr-2 h-5 w-5" />
                  Join ましろ㌠ Discord Server!
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 text-base font-medium hover:bg-accent hover:text-accent-foreground transition-all"
                asChild
              >
                <Link href="/project">
                  <IoGridOutline className="mr-2 h-5 w-5" />
                  Projects
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 text-base font-medium hover:bg-accent hover:text-accent-foreground transition-all"
                asChild
              >
                <Link href="/minigames">
                  <IoGameControllerOutline className="mr-2 h-5 w-5" />
                  Mini Games
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 text-base font-medium hover:bg-accent hover:text-accent-foreground transition-all"
                asChild
              >
                <Link href="https://blog.mashiro3.com" target="_blank">
                  <IoDocumentOutline className="mr-2 h-5 w-5" />
                  Blog
                </Link>
              </Button>
            </div>
            <Separator />

            <div className="grid gap-3">
              <p className="text-xs font-semibold text-muted-foreground text-center uppercase tracking-wider mb-1">
                Socials
              </p>
              {Object.entries(profileData.links).map(([key, item]) => (
                <Button
                  key={key}
                  variant="outline"
                  className="w-full justify-start h-12 text-base group"
                  asChild
                >
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <item.icon className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="flex-1">{item.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.id}
                    </span>
                  </Link>
                </Button>
              ))}
            </div>

            <Separator />

            <div className="grid gap-3">
              <p className="text-xs font-semibold text-muted-foreground text-center uppercase tracking-wider mb-1">
                IDs (Click to Copy)
              </p>
              {Object.entries(profileData.ids).map(([key, item]) => (
                <CopyButton
                  key={key}
                  text={item.id}
                  label={item.label}
                  icon={item.icon}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </MotionWrapper>
    </main>
  );
};

export default ProfilePage;

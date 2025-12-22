import ProjectGrid, { ProjectData } from "@/components/ProjectGrid";
import { Metadata } from "next";
import { FaCube } from "react-icons/fa6";
import { IoExtensionPuzzleOutline } from "react-icons/io5";

const minigames: ProjectData[] = [
  {
    title: "Minecraft ましろ鯖",
    description:
      "ましろ㌠公式Minecraft modサーバーです。みんなで楽しく遊びましょう！",
    url: "https:///minecraft.mashiro3.com",
    status: "active",
    techIcon: <FaCube className="h-5 w-5" />,

    hideStatus: true,
    customButtonText: "Play Game",
  },
  {
    title: "League Sliding Puzzle",
    description:
      "League of Legendsのスキン画像を使用したスライディングパズルゲームです。",
    url: "https:///leaguepuzzle.mashiro3.com",
    status: "active",
    techIcon: <IoExtensionPuzzleOutline className="h-5 w-5" />,

    hideStatus: true,
    customButtonText: "Play Game",
  },
];

export const metadata: Metadata = {
  title: "Games",
  description: "おもちゃ箱です。",
};

const MiniGamesPage = () => {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-primary">
            Games
          </h1>
          <p className="text-muted-foreground">おもちゃ箱です。</p>
        </div>

        <ProjectGrid projects={minigames} />
      </div>
    </main>
  );
};

export default MiniGamesPage;

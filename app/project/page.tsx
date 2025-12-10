import ProjectGrid, { ProjectData } from "@/components/ProjectGrid";
import { Metadata } from "next";
import {
  IoLogoAndroid,
  IoLogoPython,
  IoLogoReact,
  IoLogoVercel,
} from "react-icons/io5";

const projects: ProjectData[] = [
  {
    title: "名刺Online",
    description:
      "名刺をオンライン化するサービスでした。あまりにもニッチ過ぎて最低限のテスターが集まりませんでした。",
    url: "https://github.com/mashirovoc/meishionline",
    status: "deprecated",
    techIcon: <IoLogoAndroid className="h-5 w-5" />,
  },
  {
    title: "League  Skins Viewer",
    description:
      "League of Legendsで使用できるスキンを閲覧することができます。",
    url: "https://leagueskins.vercel.app",
    status: "active",
    techIcon: <IoLogoVercel className="h-5 w-5" />,
  },
  {
    title: "InternetVideoDownloader",
    description:
      "インターネットのありとあらゆる動画を端末に保存することができるPythonスクリプトです。",
    url: "contact",
    status: "active",
    techIcon: <IoLogoPython className="h-5 w-5" />,
  },
  {
    title: "PySynth",
    description: "pythonで動作するシンセです",
    url: "https://github.com/mashirovoc/pysynth",
    status: "deprecated",
    techIcon: <IoLogoPython className="h-5 w-5" />,
  },
  {
    title: "MMDReactViewer",
    description: "MMDモデルとMMDモーションをReact内で動作させます。",
    url: "https://github.com/mashirovoc/mmdreactviewer",
    status: "deprecated",
    techIcon: <IoLogoReact className="h-5 w-5" />,
  },
  {
    title: "ReactVideoEditor",
    description:
      "Reactで動画を編集することができます。ブラウザで動作するので出力に時間がかかります。よく考えたらReactで動画を編集する必要はありませんよね。",
    url: "none",
    status: "deprecated",
    techIcon: <IoLogoReact className="h-5 w-5" />,
  },
];

export const metadata: Metadata = {
  title: "Projects",
  description: "作成したコードまとめです。",
};

const ProjectPage = () => {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-primary">
            Projects
          </h1>
          <p className="text-muted-foreground">
            作成したコードまとめです。テストコードを含みます。
          </p>
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
};

export default ProjectPage;

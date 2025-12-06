"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  IoArchiveOutline,
  IoBanOutline,
  IoCodeSlashOutline,
  IoOpenOutline,
  IoWarningOutline,
} from "react-icons/io5";
import { ProjectData } from "./ProjectGrid";

const ProjectCard = ({
  title,
  description,
  url,
  status,
  techIcon,
  hideStatus = false,
  customButtonText,
}: ProjectData) => {
  const isDeprecated = status === "deprecated";

  const getButtonContent = () => {
    if (customButtonText) {
      return (
        <>
          <IoOpenOutline className="h-4 w-4" />
          {customButtonText}
        </>
      );
    }
    return (
      <>
        <IoOpenOutline className="h-4 w-4" />
        {url.includes("github") ? "GitHub" : "Open App"}
      </>
    );
  };

  return (
    <Card
      className={`flex flex-col h-full transition-all duration-200 border-border ${
        isDeprecated
          ? "opacity-75 bg-muted/30 border-dashed shadow-none"
          : "bg-card hover:shadow-md hover:border-primary/50"
      }`}
    >
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-2">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-md ${
                isDeprecated
                  ? "bg-muted text-muted-foreground"
                  : "bg-primary/10 text-primary"
              }`}
            >
              {techIcon ? techIcon : <IoCodeSlashOutline className="h-5 w-5" />}
            </div>
            <CardTitle
              className={`break-all text-lg leading-tight ${
                isDeprecated ? "text-muted-foreground" : "text-card-foreground"
              }`}
            >
              {title}
            </CardTitle>
          </div>

          {!hideStatus &&
            (isDeprecated ? (
              <div title="Deprecated / Archived">
                <IoArchiveOutline className="h-5 w-5 text-muted-foreground/50" />
              </div>
            ) : (
              <Badge
                variant="default"
                className="text-[10px] h-5 px-1.5 uppercase tracking-wider font-semibold"
              >
                Active
              </Badge>
            ))}
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>

      <CardFooter className="pt-0">
        {url === "contact" ? (
          <Button
            variant="secondary"
            className="w-full gap-2 text-muted-foreground bg-muted"
            disabled
          >
            <IoWarningOutline className="h-4 w-4" />
            Ask via DM
          </Button>
        ) : url === "none" ? (
          <Button
            variant="ghost"
            className="w-full gap-2 text-muted-foreground"
            disabled
          >
            <IoBanOutline className="h-4 w-4" />
            Not Available
          </Button>
        ) : (
          <Button
            className="w-full gap-2"
            variant={isDeprecated ? "outline" : "default"}
            asChild
          >
            <Link href={url} target="_blank" rel="noopener noreferrer">
              {getButtonContent()}
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

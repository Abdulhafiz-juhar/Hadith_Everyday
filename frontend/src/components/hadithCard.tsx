import type { PropsWithChildren } from "react";
import { Card } from "./ui/card";

type HadithCardProps = PropsWithChildren<{
  /* other props here, if any */
}>;

export function HadithCard({ children }: HadithCardProps) {
  return <Card>{children}</Card>;
}

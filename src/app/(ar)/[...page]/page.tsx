import { fetchOneEntry } from "@builder.io/sdk-react";
import { BUILDER_API_KEY } from "@/lib/builder";
import BuilderPage from "@/components/BuilderPage";
import { notFound } from "next/navigation";

interface PageProps {
  params: { page: string[] };
}

export default async function CatchAllPage({ params }: PageProps) {
  const urlPath = "/" + params.page.join("/");

  const content = await fetchOneEntry({
    model: "page",
    apiKey: BUILDER_API_KEY,
    userAttributes: { urlPath },
  });

  if (!content) {
    return notFound();
  }

  return <BuilderPage content={content} />;
}

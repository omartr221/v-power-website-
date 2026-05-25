"use client";
import { Content } from "@builder.io/sdk-react";
import { BUILDER_API_KEY } from "@/lib/builder";

interface BuilderPageProps {
  content: any;
}

export default function BuilderPage({ content }: BuilderPageProps) {
  if (!content) {
    return null;
  }

  return (
    <Content
      content={content}
      model="page"
      apiKey={BUILDER_API_KEY}
    />
  );
}

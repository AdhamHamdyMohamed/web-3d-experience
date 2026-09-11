"use client";

import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("./components/ModelViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full items-center justify-center bg-neutral-950 text-white">
      <p className="animate-pulse text-lg font-medium">loading .. </p>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="h-screen w-full overflow-hidden">
      <ModelViewer />
    </main>
  );
}

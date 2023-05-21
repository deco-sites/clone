import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import SpotifyLoginForm from "./LoginForm.tsx";

export interface AuthMethodProps {
  url: string;
  icon?: LiveImage;
  label: string;
}

export interface Props {
  title: string;
  authMethods?: AuthMethodProps[];
}

export default function SpotifyLoginPage({ ...props }: Props) {
  return (
    <section className="flex bg-black min-h-screen bg-gradient-to-b from-[#1A1A1A] to-[#000] p-8">
      <SpotifyLoginForm {...props} />
    </section>
  );
}

import Logo from "./logo";

export default function Loading() {
  return (
    <div className="w-full h-full bg-neutral flex items-center justify-center absolute top-0 right-0">
      <Logo size="lg" />
    </div>
  );
}

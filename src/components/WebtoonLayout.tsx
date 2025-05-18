export default function WebtoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col items-center w-full max-w-md mx-auto px-4 border-1 border-red-500`}
    >
      {children}
    </div>
  );
}

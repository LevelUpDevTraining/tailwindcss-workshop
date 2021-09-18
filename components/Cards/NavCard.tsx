type Props = {
  title: string;
  children: React.ReactNode;
};

export default function NavCard({ title, children }: Props) {
  return (
    <div className="pad">
      <h6 className="text-xl font-bold">{title}</h6>
      <hr />
      <div className="h-4" />
      <div>{children}</div>
    </div>
  );
}

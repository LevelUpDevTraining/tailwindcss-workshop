type Props = {
  title: string;
  children: React.ReactNode;
};

export default function SimpleCard({ title, children }: Props) {
  return (
    <div className="pad">
      <h4 className="text-center">{title}</h4>
      <div className="h-4" />
      <div>{children}</div>
    </div>
  );
}

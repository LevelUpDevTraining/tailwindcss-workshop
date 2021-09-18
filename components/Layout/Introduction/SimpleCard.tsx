type Props = {
  title: string;
  children: React.ReactNode;
};

export default function SimpleCard({ title, children }: Props) {
  return (
    <div>
      <h5 className="text-center p-2">{title}</h5>
      <div className="text-center">{children}</div>
    </div>
  );
}

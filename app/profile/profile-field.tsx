export default function ProfileField({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p className="font-medium">{label}</p>
      <p className="text-muted-foreground">{value || '-'}</p>
    </div>
  );
}

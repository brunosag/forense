import { Alert, AlertDescription } from '@/app/components/ui/alert';
import { AlertCircleIcon, XIcon } from 'lucide-react';

export default function LoginAlert({ handleAlertClose }: { handleAlertClose: () => void }) {
  return (
    <Alert variant="destructive" className="p-3">
      <AlertDescription className="flex items-center gap-2">
        <AlertCircleIcon className="h-4 w-4" />
        Invalid credentials. Please try again.
        <button type="button" onClick={handleAlertClose} className="ml-auto hover:scale-125 transition-transform">
          <XIcon className="h-4 w-4 text-muted-foreground/60" />
        </button>
      </AlertDescription>
    </Alert>
  );
}

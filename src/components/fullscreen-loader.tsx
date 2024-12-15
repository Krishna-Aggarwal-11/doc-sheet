import { Loader2Icon } from "lucide-react";

interface FullScreenLoaderProps {
    label?: string;
}

export const FullScreenLoader = ({ label }: FullScreenLoaderProps) => {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col gap-2">
            <Loader2Icon className="size-6 animate-spin text-muted-foreground" />
            {label && <p className="text-sm text-muted-foreground">{label}</p>}
        </div>
    )
}
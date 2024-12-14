import { BsCloudCheck } from "react-icons/bs";
export const DocumentInput = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg px-1.5 cursor-pointer truncate">
        Untitled document
      </span>
      <BsCloudCheck className="h-4 w-4" />
    </div>
  );
};

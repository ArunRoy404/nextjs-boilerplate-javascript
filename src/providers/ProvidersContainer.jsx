import { Toaster } from "@/components/ui/sonner";

const ProvidersContainer = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default ProvidersContainer;

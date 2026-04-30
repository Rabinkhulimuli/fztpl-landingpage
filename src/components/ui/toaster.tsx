import * as Toast from '@radix-ui/react-toast';

export function Toaster() {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Viewport className="fixed bottom-0 right-0 z-50 flex max-h-screen w-full flex-col-reverse gap-2 p-4 sm:max-w-sm" />
    </Toast.Provider>
  );
}
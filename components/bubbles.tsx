import { P } from "./typography";

export function UserBubble({ children }: any) {
  return (
    <div className="bg-gray-100 max-w-sm p-2 rounded-xl w-max my-4">
      <P>{children}</P>
    </div>
  );
}

export function AIBubble({ children }: any) {
  return (
    <div className="bg-[#007AFF] max-w-sm p-2 rounded-xl w-max my-4 ml-auto">
      <P className="text-white">{children}</P>
    </div>
  );
}

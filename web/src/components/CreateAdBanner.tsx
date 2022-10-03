import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export const CreateAdBanner = () => {
  return (
    <div className="mt-8 pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Did not find your duo?
          </strong>
          <span className="text-zinc-400 block">
            Share an ad to find new players!
          </span>
        </div>

        <Dialog.Trigger className="buttonClass py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Share Ad
        </Dialog.Trigger>
      </div>
    </div>
  );
};

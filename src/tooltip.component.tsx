import { FC } from "react";

interface Props {
  message: string;
}

export const TooltipComponent: FC<Props> = ({ message }) => {
  return (
    <div
      id="tooltip-default"
      role="tooltip"
      className="tooltip absolute z-10 inline-block bg-gray-900 font-medium shadow-sm text-white py-2 px-3 text-sm rounded-lg opacity-0 duration-300 transition-opacity invisible"
    >
      {message}
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  );
};

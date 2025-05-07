import { useEffect, RefObject } from "react";

function useClickOutside(
  action: () => void,
  ref: RefObject<HTMLElement>,
  ref2: RefObject<HTMLElement> | null = null
) {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        (ref2 ? ref2.current && !ref2.current.contains(event.target as Node) : true)
      ) {
        action();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
}

export default useClickOutside;

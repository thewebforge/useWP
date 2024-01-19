import { useEffect } from "@wordpress/element";

const useDocTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useDocTitle;

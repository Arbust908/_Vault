import { useEffect, useState } from "react";
import { searchTitles, type Title } from "../api";
import { useDebounce } from "./useDebounce";

interface UseFetchTitlesResult {
  titles: Title[];
  loading: boolean;
  error: Error | null
}

export function useFetchTitles(query: string, delay: number = 250): UseFetchTitlesResult {
  const [titles, setTitles] = useState<Title[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const debouncedQuery = useDebounce(query, delay);

  useEffect(() => {
    // The first thing we need to do here is check that the debounce query is not empty and we could set a minimum length if we want. If we do that we should check that before sending it to the bounce, I believe. After that we'll set we'll clean up the loading and the error states to make sure that we start fresh. Then we have the is stale variable to make sure that we are doing a fresh search after the fresh search we set after the stale variable is is set we go and set loading is true and make the make the call then we get the value of the data from the search titles set the titles from the data set the loading as false, and if we catch any errors we set the the error set loading as false, and then we should do the cleanup and tie that to the the bound square and as stated return the titles, the loading state, and the error.
    // we're not using fetch per se, so we can't add an abort controller, but in here if we were we could add abort controller.
    if (debouncedQuery === undefined) {
      return;
    }

    let isStale = false;

    setLoading(true);
    setError(null);

    searchTitles(debouncedQuery)
      .then((data) => {
        if (!isStale) {
          setTitles(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!isStale) {
          setError(err instanceof Error ? err : new Error(String(err)));
          setLoading(false);
        }
      })

    return () => {
      isStale = true
    };
  }, [debouncedQuery]);

  return { titles, loading, error };
}

import { useEffect, useState } from "react";

function getStoredValue(key, initialValue) {
  try {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialValue;
  } catch {
    return initialValue;
  }
}

function useLocalStorage(key, initialValue) {
  const [value, setValueState] = useState(() => getStoredValue(key, initialValue));

  function setValue(newValue) {
    setValueState((previousValue) => {
      const valueToStore =
        typeof newValue === "function" ? newValue(previousValue) : newValue;

      localStorage.setItem(key, JSON.stringify(valueToStore));

      window.dispatchEvent(
        new CustomEvent("local-storage-update", {
          detail: { key },
        })
      );

      return valueToStore;
    });
  }

  useEffect(() => {
    function handleStorageChange(event) {
      if (event.key && event.key !== key) return;

      setValueState(getStoredValue(key, initialValue));
    }

    function handleCustomStorageChange(event) {
      if (event.detail?.key !== key) return;

      setValueState(getStoredValue(key, initialValue));
    }

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("local-storage-update", handleCustomStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(
        "local-storage-update",
        handleCustomStorageChange
      );
    };
  }, [key, initialValue]);

  return [value, setValue];
}

export default useLocalStorage;
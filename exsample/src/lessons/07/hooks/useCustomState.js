import { useState } from "react";

export function useCustomState() {
  const [counter, setCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  return {
    counter, setCounter,
    isOpen, setIsOpen,
    search, setSearch,
  }
}

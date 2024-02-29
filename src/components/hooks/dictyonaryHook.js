import { useEffect } from "react";

export const useDictionaryHook = () => {
  const CategoriesItem = [
    "Verb",
    "Participle",
    "Noun",
    "Adjective",
    "Pronoun",
    "Numerals",
    "Adverb",
    "Preposition",
    "Conjuction",
    "Phrasal verb",
    "Functional phrase",
  ];

  useEffect(() => {
    const customInput = document.querySelector(".custom-input");
    const input = customInput.querySelector("input");
    const dropdown = customInput.querySelector(".dropdown");
    const dropdownItems = dropdown.querySelectorAll("li");

    const handleClick = () => {
      dropdown.style.display = "grid";
    };

    const handleDropdownItemClick = (item) => {
      input.value = item.textContent;
      dropdown.style.display = "none";
    };

    const handleDocumentClick = (e) => {
      if (!customInput.contains(e.target)) {
        dropdown.style.display = "none";
      }
    };

    input.addEventListener("click", handleClick);

    dropdownItems.forEach((item) => {
      item.addEventListener("click", () => handleDropdownItemClick(item));
    });

    document.addEventListener("click", handleDocumentClick);

    return () => {
      input.removeEventListener("click", handleClick);
      dropdownItems.forEach((item) =>
        item.removeEventListener("click", handleDropdownItemClick)
      );
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return { CategoriesItem };
};

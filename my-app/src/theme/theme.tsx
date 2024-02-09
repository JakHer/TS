import { ReactNode, useState } from "react";

export const Themes = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const themeOptions = ["light", "dark", "system"];

  return (
    <section>
      <h1>Themes</h1>
      <ThemeOptions
        themeOptions={themeOptions}
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
      />
      <p>
        Selected Theme: <strong>{selectedTheme}</strong>
      </p>
    </section>
  );
};

type ThemeOptionsProps<T> = {
  themeOptions: T[];
  selectedTheme: T;
  setSelectedTheme: React.Dispatch<React.SetStateAction<T>>;
};

const ThemeOptions = <T extends ReactNode>({
  themeOptions,
  selectedTheme,
  setSelectedTheme,
}: ThemeOptionsProps<T>) =>
  themeOptions.map((theme, index) => (
    <ul>
      <li key={index}>
        <button
          style={{
            fontWeight: selectedTheme === theme ? "bold" : "normalss",
          }}
          onClick={() => setSelectedTheme(theme)}
        >
          {theme}
        </button>
      </li>
    </ul>
  ));

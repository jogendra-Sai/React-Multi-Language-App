import { useTranslation, Trans } from "react-i18next";
import "./App.css";
import LanguageSelector from "./assets/components/language-selector";

function App() {
  const { t } = useTranslation();
  const { line1, line2 } = t("description");
  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <span>
        <Trans
          i18nKey={line1}
          values={{
            channel: "Jogendra",
          }}
          components={{ 1: <b /> }}
        />
      </span>
      <span>{line2}</span>
    </div>
  );
}

export default App;

import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function SidebarLinks({ fileData, displayClass, cfg }: QuartzComponentProps) {
  const isFrench = cfg?.locale?.startsWith("fr") ?? false
  const prefix = isFrench ? "/fr" : ""

  return (
    <div class={`sidebar-links ${displayClass ?? ""}`}>
        <span>
        {fileData?.slug && fileData.slug !== "index" && (
          <>
            <a href={`${prefix}/`}>
              {isFrench ? "À propos" : "About"}
            </a>
            <small><b> ・ </b></small>
          </>
        )}
          <a href={`${prefix}/glossary`}>
            {isFrench ? "Glossaire" : "Glossary"}
          </a>
        </span>
      <a href={`${prefix}/practice`}>
        {isFrench ? "Questions d'entraînement" : "Practice Questions"}
      </a>
      <a href={`https://reiwa.ca${prefix}/tutoring/lessons`}>
        {isFrench ? "Cours de langues" : "Language Tutoring"}
      </a>
    </div>
  )
}

export default (() => SidebarLinks) satisfies QuartzComponentConstructor

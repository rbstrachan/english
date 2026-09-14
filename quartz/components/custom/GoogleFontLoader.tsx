// import { QuartzComponent, QuartzComponentConstructor } from "./types"
//
// export default (() => {
//   const GoogleFontLoader: QuartzComponent = () => {
//     return null
//   }
//
//   GoogleFontLoader.beforeDOMLoaded = `
//     if (!document.getElementById('google-fonts-link')) {
//       const fontLink = document.createElement('link');
//       fontLink.id = 'google-fonts-link';
//       fontLink.href = 'https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap';
//       fontLink.rel = 'stylesheet';
//       document.head.appendChild(fontLink);
//     }
//   `
//
//   return GoogleFontLoader
// }) satisfies QuartzComponentConstructor

import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const GoogleFontLoader: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    if (fileData.slug !== "index") {
      return null
    }
    return null
  }

  GoogleFontLoader.beforeDOMLoaded = `
    if (!document.getElementById('google-fonts-link')) {
      const fontLink = document.createElement('link');
      fontLink.id = 'google-fonts-link';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap';
      fontLink.rel = 'stylesheet';
      document.head.appendChild(fontLink);
    }
  `

  return GoogleFontLoader
}) satisfies QuartzComponentConstructor

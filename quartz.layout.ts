import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "reiwa.ca": "https://reiwa.ca",
      GitHub: "https://github.com/rbstrachan",
      Contact: "https://reiwa.ca/contact"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),

    Component.GoogleFontLoader()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      sortFn: (a, b) => {
        // If both are files OR both are folders, sort alphabetically by displayName
        if ((a.file && b.file) || (!a.file && !b.file)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        // Put files before folders
        if (a.file && !b.file) {
          return -1
        } else {
          return 1
        }
      },
    }),

    Component.DesktopOnly(Component.Spacer()),
    Component.DesktopOnly(Component.SidebarLinks())
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      sortFn: (a, b) => {
        // If both are files OR both are folders, sort alphabetically by displayName
        if ((a.file && b.file) || (!a.file && !b.file)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        // Put files before folders
        if (a.file && !b.file) {
          return -1
        } else {
          return 1
        }
      },
    }),

    Component.DesktopOnly(Component.Spacer()),
    Component.DesktopOnly(Component.SidebarLinks())
  ],
  right: [],
}

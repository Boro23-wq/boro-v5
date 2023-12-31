import {
  useEffect,
  useRef,
  useMemo,
  useState,
  memo,
  createContext,
  useContext
} from 'react'
import cn from 'classnames'
import { useRouter } from 'next/router'
import useDelayedRender from 'use-delayed-render'
import { DialogContent, DialogOverlay } from '@reach/dialog'

import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  useCommand,
  usePages,
  CommandGroup
} from 'cmdk'

import { Command as CommandIcon } from '@components/icons'

import tinykeys from '@lib/tinykeys'
import postMeta from '@data/blog.json'
import projectMeta from '@data/project.json'
import articleMetaAndSchema from '@data/article.json'

import styles from './command.module.css'
import headerStyles from '@components/header/header.module.css'
import { useTheme } from 'next-themes'

const CommandData = createContext({})
const useCommandData = () => useContext(CommandData)

const CommandMenu = memo(() => {
  const listRef = useRef()
  const commandRef = useRef()
  const router = useRouter()
  const commandProps = useCommand({
    label: 'Site Navigation'
  })
  const [pages, setPages] = usePages(commandProps, ThemeItems)
  const [open, setOpen] = useState(false)
  const { search, list } = commandProps

  const { mounted, rendered } = useDelayedRender(open, {
    enterDelay: -1,
    exitDelay: 200
  })

  // Can't do this inside of useCommand because it relies on useDelayedRender
  useEffect(() => {
    if (!mounted) {
      setPages([DefaultItems])
    }
  }, [mounted, setPages])

  const Items = pages[pages.length - 1]

  const keymap = useMemo(() => {
    return {
      t: () => {
        setPages([ThemeItems])
        setOpen(true)
      },
      // Blog
      'g b': () => router.push('/blog'),
      // Navigation
      'g h': () => router.push('/'),
      'g s': () => router.push('/social'),
      // Collections
      'g a': () => router.push('/articles'),
      'g p': () => router.push('/project'),
      // Social
      'g t': () => () => window.open('https://twitter.com/sdotboro', '_blank')
    }
  }, [router, setPages])

  // Register the keybinds globally
  useEffect(() => {
    const unsubs = [
      tinykeys(window, keymap, { ignoreFocus: true }),
      tinykeys(window, { '$mod+k': () => setOpen(o => !o) })
    ]
    return () => {
      unsubs.forEach(unsub => unsub())
    }
  }, [keymap])

  useEffect(() => {
    // When items change, bounce the UI
    if (commandRef.current) {
      // Bounce the UI slightly
      commandRef.current.style.transform = 'scale(0.99)'
      commandRef.current.style.transition = 'transform 0.1s ease'
      // Not exactly safe, but should be OK
      setTimeout(() => {
        commandRef.current.style.transform = ''
      }, 100)
    }
  }, [pages])

  const heightRef = useRef()

  useEffect(() => {
    if (!listRef.current || !heightRef.current) return

    const height = Math.min(listRef.current.offsetHeight + 1, 300)
    heightRef.current.style.height = height + 'px'
  })

  return (
    <>
      <button
        className={headerStyles.command}
        title="⌘K"
        onClick={() => setOpen(true)}
      >
        <CommandIcon />
      </button>

      <DialogOverlay
        isOpen={mounted}
        className={cn(styles.screen, {
          [styles.show]: rendered
        })}
        onDismiss={() => setOpen(false)}
      >
        <DialogContent
          className={styles['dialog-content']}
          aria-label="Site Navigation"
        >
          <Command
            {...commandProps}
            ref={commandRef}
            className={cn(styles.command, {
              [styles.show]: rendered
            })}
          >
            <div className={styles.top}>
              <CommandInput
                placeholder={
                  Items === ThemeItems
                    ? 'Select a theme...'
                    : Items === BlogItems
                    ? 'Search for blogs...'
                    : Items === ArticleItems
                    ? 'Search for articles...'
                    : Items === ProjectItems
                    ? 'Search for projects'
                    : 'Type a command or search...'
                }
              />
            </div>

            <div
              ref={heightRef}
              className={cn(styles.container, {
                [styles.empty]: list.current.length === 0
              })}
            >
              <CommandList ref={listRef}>
                <CommandData.Provider
                  value={{ pages, search, open, setPages, keymap, setOpen }}
                >
                  <Items />
                </CommandData.Provider>
              </CommandList>
            </div>
          </Command>
        </DialogContent>
      </DialogOverlay>
    </>
  )
})

CommandMenu.displayName = 'CommandMenu'
export default CommandMenu

const ThemeItems = () => {
  const { theme: activeTheme, themes, setTheme } = useTheme()
  const { setOpen } = useCommandData()

  return themes.map(theme => {
    if (theme === activeTheme) return null
    return (
      <Item
        value={theme}
        key={`theme-${theme}`}
        callback={() => {
          setTheme(theme)
          setOpen(false)
        }}
      >
        {theme}
      </Item>
    )
  })
}

const BlogItems = () => {
  const router = useRouter()

  return postMeta.map((post, i) => {
    return (
      <Item
        key={`blog-item-${post.title}-${i}`}
        value={post.title}
        callback={() => router.push('/blog/[slug]', `/blog/${post.slug}`)}
      />
    )
  })
}

const ProjectItems = () => {
  const router = useRouter()

  return projectMeta.map((project, i) => {
    return (
      <Item
        key={`project-item-${project.title}-${i}`}
        value={project.title}
        callback={() =>
          router.push('/project/[slug]', `/project/${project.slug}`)
        }
      />
    )
  })
}

const ArticleItems = () => {
  const router = useRouter()
  const articleMeta = articleMetaAndSchema.data

  return articleMeta.map((article, i) => {
    return (
      <Item
        key={`article-item-${article.title}-${i}`}
        value={article.title}
        callback={() => router.push(`${article.url}`)}
      />
    )
  })
}

const Label = ({ title, values, search }) => {
  return (
    <div className={styles.label} aria-hidden>
      {title}
    </div>
  )
}

const Group = ({ children, title }) => {
  return (
    <CommandGroup heading={<Label title={title} />} className={styles.group}>
      {children}
    </CommandGroup>
  )
}

const DefaultItems = () => {
  const { setPages, pages } = useCommandData()

  return (
    <>
      <Item value="Theme" keybind="t" closeOnCallback={false} />

      <Group title="Navigation">
        <Item value="Home" keybind="g h" />
        <Item value="Social" keybind="g s" />
      </Group>

      <Group title="Blog">
        <Item value="Blog" keybind="g b" />
        <Item
          value="Search blog"
          closeOnCallback={false}
          callback={() => setPages([...pages, BlogItems])}
        />
      </Group>

      <Group title="Collection">
        <Item value="Project" keybind="g p" />
        <Item
          value="Search project"
          closeOnCallback={false}
          callback={() => setPages([...pages, ProjectItems])}
        />
        <Item value="Article" keybind="g a" />
        <Item
          value="Search article"
          closeOnCallback={false}
          callback={() => setPages([...pages, ArticleItems])}
        />
      </Group>
    </>
  )
}

const Item = ({
  icon,
  children,
  callback,
  closeOnCallback = true,
  keybind,
  ...props
}) => {
  const { keymap, setOpen } = useCommandData()

  const cb = () => {
    if (callback) {
      callback()
    } else {
      keymap[keybind]?.()
    }

    if (closeOnCallback) {
      setOpen(false)
    }
  }

  return (
    <CommandItem {...props} callback={cb}>
      <div>
        <div className={styles.icon}>{icon}</div>
        <p className="clamp">{children || props.value}</p>
      </div>

      {keybind && (
        <span className={styles.keybind}>
          {keybind.includes(' ') ? (
            keybind.split(' ').map((key, i) => {
              return <kbd key={`keybind-${key}-${i}`}>{key}</kbd>
            })
          ) : (
            <kbd>{keybind}</kbd>
          )}
        </span>
      )}
    </CommandItem>
  )
}

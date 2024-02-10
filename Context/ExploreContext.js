import { useContext, createContext } from "react"

export const ExploreContentContext = createContext({
    name : "Surfing",
    value : 0,
    wishlists : []
})

export const ExploreContentProvider = ExploreContentContext.Provider

export default function useExploreContent() {
    return useContext(ExploreContentContext)
}
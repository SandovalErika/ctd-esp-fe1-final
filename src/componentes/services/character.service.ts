export const extractCharacterId = (url: string): string => {
    return url.split("character")[1].replace("/","")
}
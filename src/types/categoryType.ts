interface Option {
    id: number
    title: string
}

interface Category {
    id: number
    title: string
    options: Option[]
}

export {Option, Category}
import { useState } from "react"

export const useForm = () => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({})

    const setForm = (data: { [key: string]: string }) => {
        setFormData((formData) => ({ ...formData, ...data }))
    }

    return { formData, setForm }
}

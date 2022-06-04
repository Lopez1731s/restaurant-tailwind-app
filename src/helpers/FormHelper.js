import { useState } from "react"

export const FormHelper = () => {
    const [data, setData] = useState("")

    const handleChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    };
    return { handleChange , handleSubmit, data}
}
import { useForm } from "react-hook-form"

export default function Upload(){
    const { register, handleSubmit} = useForm()

    const onChange = (e) => {
        const file = e.target.files[0];
        
    }

    return (
        <>
            <h1>Upload</h1>
        </>
    )
}
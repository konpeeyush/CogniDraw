import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { FormField, Loader } from '../components'

const CreatePosts = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    });

const handleSubmit = () => {

}

const handleChange = (e) => {

}

const handleSurpriseMe=()=>{
    
}

    const [generatingImg, setGeneratingImg] = useState(false)
    const [loading, setLoading] = useState(false)

    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className='font-extrabold text-[#2222328] text-[32px]'>Create</h1>
                <p className='mt-2 text-[#666e75] text-[14px] max-w[500px]'>Create imaginative and visually stunning images through DALL-E AI and share them with the community</p>
            </div>

            <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-5'>
                    <FormField
                        labelName="Your Name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={form.name}
                        handleChange={handleChange}
                    />
                    <FormField
                        labelName="Prompt"
                        type="text"
                        name="prompt"
                        placeholder="A man standing in front of a stargate to another dimension"
                        value={form.prompt}
                        handleChange={handleChange}
                        handleSurpriseMe={handleSurpriseMe}
                    />
                </div>
            </form>
        </section>
    )
}

export default CreatePosts